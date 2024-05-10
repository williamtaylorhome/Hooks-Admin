import NProgress from "@/config/nprogress";
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serviceLoading";
import { ResultData } from "@/api/interface";
import { ResultEnum } from "@/enums/httpEnum";
import { checkStatus } from "./helper/checkStatus";
import { AxiosCanceler } from "./helper/axiosCancel";
import { setToken } from "@/redux/modules/global/action";
import { message } from "antd";
import { store } from "@/redux";

const axiosCanceler = new AxiosCanceler();

const config = {
	// The default address request address can be changed in a file starting with .env
	baseURL: import.meta.env.VITE_API_URL as string,
	// Set the timeout period (10s)
	timeout: 10000,
	// Credentials can be carried across domains
	withCredentials: true
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// Instantiate axios
		this.service = axios.create(config);

		/**
		 * @description Request Interceptor
		 * The client sends a request -> [request interceptor] -> server
		 * Token Validation (JWT): Accepts the token returned by the server and stores it in redux/local storage
		 */
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				NProgress.start();
				// * Add the current request to pending
				axiosCanceler.addPending(config);
				// * If the current request does not need to display loading, use the third parameter specified in the api service: { headers: { noLoading: true } } to control the display of loading, see loginApi
				config.headers!.noLoading || showFullScreenLoading();
				const token: string = store.getState().global.token;
				return { ...config, headers: { ...config.headers, "x-access-token": token } };
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		/**
		 * @description Response Interceptor
		 *  Server exchange information -> [Intercept Unified Processing] -> Client JS obtains the information
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				NProgress.done();
				// * After the request is completed, remove the request (disable loading)
				axiosCanceler.removePending(config);
				tryHideFullScreenLoading();
				// * The login is invalid（code == 599）
				if (data.code == ResultEnum.OVERDUE) {
					store.dispatch(setToken(""));
					message.error(data.msg);
					window.location.hash = "/login";
					return Promise.reject(data);
				}
				// * Global error message interception (prevent data stream from being returned when downloading files, no code, and direct error reporting)
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					message.error(data.msg);
					return Promise.reject(data);
				}
				// * Successful request (no failure logic is handled on the page unless there are special cases)
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				NProgress.done();
				tryHideFullScreenLoading();
				// The request timeout is judged separately, and the request timeout is not response
				if (error.message.indexOf("timeout") !== -1) message.error("The request timed out, please try again later");
				// Depending on the error status code of the response, different processing is done
				if (response) checkStatus(response.status);
				// None of the server results are returned (the server may be faulty, the client may be disconnected) Disconnection Handling: You can jump to the disconnection page
				if (!window.navigator.onLine) window.location.hash = "/500";
				return Promise.reject(error);
			}
		);
	}

	// * Encapsulation of common request methods
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);
