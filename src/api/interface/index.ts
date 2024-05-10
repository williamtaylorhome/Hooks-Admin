// * Request response parameters (excluding data)
export interface Result {
	code: string;
	msg: string;
}

// * Request response parameters (including data)
export interface ResultData<T = any> extends Result {
	data?: T;
}

// * Pagination response parameters
export interface ResPage<T> {
	datalist: T[];
	pageNum: number;
	pageSize: number;
	total: number;
}

// * Pagination request parameters
export interface ReqPage {
	pageNum: number;
	pageSize: number;
}

// * login
export namespace Login {
	export interface ReqLoginForm {
		username: string;
		password: string;
	}
	export interface ResLogin {
		access_token: string;
	}
	export interface ResAuthButtons {
		[propName: string]: any;
	}
}
