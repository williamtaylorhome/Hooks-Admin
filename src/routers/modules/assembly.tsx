import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// Common Component Modules
const assemblyRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Common components"
		},
		children: [
			{
				path: "/assembly/guide",
				element: lazyLoad(React.lazy(() => import("@/views/assembly/guide/index"))),
				meta: {
					requiresAuth: true,
					title: "Landing page",
					key: "guide"
				}
			},
			{
				path: "/assembly/svgIcon",
				element: lazyLoad(React.lazy(() => import("@/views/assembly/svgIcon/index"))),
				meta: {
					requiresAuth: true,
					title: "SVG icon",
					key: "svgIcon"
				}
			},
			{
				path: "/assembly/selectIcon",
				element: lazyLoad(React.lazy(() => import("@/views/assembly/selectIcon/index"))),
				meta: {
					requiresAuth: true,
					title: "Icon selection",
					key: "selectIcon"
				}
			},
			{
				path: "/assembly/batchImport",
				element: lazyLoad(React.lazy(() => import("@/views/assembly/batchImport/index"))),
				meta: {
					requiresAuth: true,
					title: "Import data in bulk",
					key: "selectIcon"
				}
			}
		]
	}
];

export default assemblyRouter;
