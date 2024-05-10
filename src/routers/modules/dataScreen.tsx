import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// Data dashboard module
const dataScreenRouter: Array<RouteObject> = [
	{
		path: "/dataScreen/index",
		element: lazyLoad(React.lazy(() => import("@/views/dataScreen/index"))),
		meta: {
			requiresAuth: true,
			title: "Large data screen",
			key: "dataScreen"
		}
	}
];

export default dataScreenRouter;
