import axios, { AxiosRequestConfig, Canceler } from "axios";
import { isFunction } from "@/utils/is/index";
import qs from "qs";

// * Declare a Map to store the identity and cancellation functions for each request
let pendingMap = new Map<string, Canceler>();

// * Serialization parameters
export const getPendingUrl = (config: AxiosRequestConfig) =>
	[config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");

export class AxiosCanceler {
	/**
	 * @description: Add a request
	 * @param {Object} config
	 */
	addPending(config: AxiosRequestConfig) {
		// * Before the request starts, check and cancel the previous request
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!pendingMap.has(url)) {
					// If the current request does not exist in pending, it is added
					pendingMap.set(url, cancel);
				}
			});
	}

	/**
	 * @description: Removal requests
	 * @param {Object} config
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);

		if (pendingMap.has(url)) {
			// If there is a current request flag in pending, you need to cancel the current request and remove it
			const cancel = pendingMap.get(url);
			cancel && cancel();
			pendingMap.delete(url);
		}
	}

	/**
	 * @description: Clear all pendings
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}

	/**
	 * @description: Reset
	 */
	reset(): void {
		pendingMap = new Map<string, Canceler>();
	}
}
