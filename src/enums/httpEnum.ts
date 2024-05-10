// * Request an enumeration configuration
/**
 * @description: Request configuration
 */
export enum ResultEnum {
	SUCCESS = 200,
	ERROR = 500,
	OVERDUE = 599,
	TIMEOUT = 10000,
	TYPE = "success"
}

/**
 * @description: Request method
 */
export enum RequestEnum {
	GET = "GET",
	POST = "POST",
	PATCH = "PATCH",
	PUT = "PUT",
	DELETE = "DELETE"
}

/**
 * @description: commonly used contentTyp type
 */
export enum ContentTypeEnum {
	// Json
	JSON = "application/json;charset=UTF-8",
	// Text
	TEXT = "text/plain;charset=UTF-8",
	// form-data Generally with QS
	FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
	// form-data upload
	FORM_DATA = "multipart/form-data;charset=UTF-8"
}
