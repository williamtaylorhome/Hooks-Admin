import { message } from "antd";

/**
 * @description: Verify the network request status code
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number): void => {
	switch (status) {
		case 400:
			message.error("Request failed! Please try again later");
			break;
		case 401:
			message.error("Login is invalid! Please log in again");
			break;
		case 403:
			message.error("The current account has no access permission!");
			break;
		case 404:
			message.error("The resource you're accessing doesn't exist!");
			break;
		case 405:
			message.error("Wrong way to request! Please try again later");
			break;
		case 408:
			message.error("The request timed out! Please try again later");
			break;
		case 500:
			message.error("Service Exceptional!");
			break;
		case 502:
			message.error("Gateway error!");
			break;
		case 503:
			message.error("Service is not available!");
			break;
		case 504:
			message.error("Gateway timed out!");
			break;
		default:
			message.error("Request failed!");
	}
};
