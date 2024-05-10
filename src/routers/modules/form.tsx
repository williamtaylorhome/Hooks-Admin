import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// Form module
const formRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Form"
		},
		children: [
			{
				path: "/form/basicForm",
				element: lazyLoad(React.lazy(() => import("@/views/form/basicForm/index"))),
				meta: {
					requiresAuth: true,
					title: "Basic Form",
					key: "basicForm"
				}
			},
			{
				path: "/form/validateForm",
				element: lazyLoad(React.lazy(() => import("@/views/form/validateForm/index"))),
				meta: {
					requiresAuth: true,
					title: "verify Form",
					key: "validateForm"
				}
			},
			{
				path: "/form/dynamicForm",
				element: lazyLoad(React.lazy(() => import("@/views/form/dynamicForm/index"))),
				meta: {
					requiresAuth: true,
					title: "Dynamic Forms",
					key: "dynamicForm"
				}
			}
		]
	}
];

export default formRouter;
