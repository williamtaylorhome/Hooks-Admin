import defaultTheme from "@/styles/theme/theme-default.less";
import darkTheme from "@/styles/theme/theme-dark.less";
import { ThemeConfigProp } from "@/redux/interface";

/**
 * @description Global theme settings
 * */
const useTheme = (themeConfig: ThemeConfigProp) => {
	const { weakOrGray, isDark } = themeConfig;
	const initTheme = () => {
		// Gray and muted color switching
		const body = document.documentElement as HTMLElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// Toggle the dark mode
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
