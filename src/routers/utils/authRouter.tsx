import { useLocation, Navigate } from "react-router-dom";
import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { searchRoute } from "@/utils/util";
import { rootRouter } from "@/routers/index";
import { HOME_URL } from "@/config/config";
import { store } from "@/redux/index";

const axiosCanceler = new AxiosCanceler();

/**
 * @description Route guard component
 * */
const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, rootRouter);
	// * Clear all requests before redirecting the route
	axiosCanceler.removeAllPending();

	// * Determine whether the current route requires access permissions (permission is not required)
	if (!route.meta?.requiresAuth) return props.children;

	// * Check whether there is a token
	const token = store.getState().global.token;
	if (!token) return <Navigate to="/login" replace />;

	// * Dynamic Router (a one-dimensional array generated from the menu data returned by the backend)
	const dynamicRouter = store.getState().auth.authRouter;
	// * Static Router (static route, the home address must be configured, otherwise you can't enter the home page to get menu, button permissions and other data), it will be loaded when getting data, and all the home page addresses are no problem
	const staticRouter = [HOME_URL, "/403"];
	const routerList = dynamicRouter.concat(staticRouter);
	// * If the accessed address is not redirected to the 403 page in the routing table
	if (routerList.indexOf(pathname) == -1) return <Navigate to="/403" />;

	// * The current account has the permission to return to the Router and access the page as normal
	return props.children;
};

export default AuthRouter;
