import { AnyAction } from "redux";
import { GlobalState } from "@/redux/interface";
import produce from "immer";
import * as types from "@/redux/mutation-types";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	assemblySize: "middle",
	language: "",
	themeConfig: {
		// default primary Theme colors
		primary: "#1890ff",
		// Dark mode
		isDark: false,
		// Weak mode (weak) || Gray
		weakOrGray: "",
		// Breadcrumb navigation
		breadcrumb: true,
		// tabs
		tabs: true,
		// page footer
		footer: true
	}
};

// global reducer
const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TOKEN:
				draftState.token = action.token;
				break;
			case types.SET_ASSEMBLY_SIZE:
				draftState.assemblySize = action.assemblySize;
				break;
			case types.SET_LANGUAGE:
				draftState.language = action.language;
				break;
			case types.SET_THEME_CONFIG:
				draftState.themeConfig = action.themeConfig;
				break;
			default:
				return draftState;
		}
	});

export default global;
