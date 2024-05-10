import * as types from "@/redux/mutation-types";
import { getMenuList } from "@/api/modules/login";
import { Dispatch } from "react";

// * Update collapse
export const updateCollapse = (isCollapse: boolean) => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

// * Set menu list
export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: types.SET_MENU_LIST,
	menuList
});

// ? The following methods are for testing purposes only and do not participate in any feature development
interface MenuProps {
	type: string;
	menuList: Menu.MenuOptions[];
}
// * Redux thunk
export const getMenuListActionThunk = () => {
	return async (dispatch: Dispatch<MenuProps>) => {
		const res = await getMenuList();
		dispatch({
			type: types.SET_MENU_LIST,
			menuList: (res.data as Menu.MenuOptions[]) ?? []
		});
	};
};

// * Redux promise《async/await》
export const getMenuListAction = async (): Promise<MenuProps> => {
	const res = await getMenuList();
	return {
		type: types.SET_MENU_LIST,
		menuList: res.data ? res.data : []
	};
};

// * Redux promise《.then/.catch》
export const getMenuListActionPromise = (): Promise<MenuProps> => {
	return getMenuList().then(res => {
		return {
			type: types.SET_MENU_LIST,
			menuList: res.data ? res.data : []
		};
	});
};
