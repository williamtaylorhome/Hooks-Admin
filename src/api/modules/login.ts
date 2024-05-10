import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import qs from "qs";

import http from "@/api";

/**
 * @name Log in to the module
 */
// * User login interface
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(PORT1 + `/login`, params);
	return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post Request to carry query parameter  ==>  ?username=admin&password=123456
	return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post Request to carry Forms parameter  ==>  application/x-www-form-urlencoded
	return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }); // Controls that the current request does not show loading
};

// * Get button permissions
export const getAuthorButtons = () => {
	return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`);
};

// * Get a list of menus
export const getMenuList = () => {
	return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`);
};
