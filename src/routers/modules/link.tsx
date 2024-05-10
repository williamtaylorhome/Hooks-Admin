import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// External Links module
const linkRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "External links"
		},
		children: [
			{
				path: "/link/gitee",
				element: lazyLoad(React.lazy(() => import("@/views/link/gitee/index"))),
				meta: {
					requiresAuth: true,
					title: "Gitee warehouse",
					key: "gitee"
				}
			},
			{
				path: "/link/github",
				element: lazyLoad(React.lazy(() => import("@/views/link/github/index"))),
				meta: {
					requiresAuth: true,
					title: "GitHub warehouse",
					key: "github"
				}
			},
			{
				path: "/link/juejin",
				element: lazyLoad(React.lazy(() => import("@/views/link/juejin/index"))),
				meta: {
					requiresAuth: true,
					title: "Nugget Documentation",
					key: "juejin"
				}
			},
			{
				path: "/link/myBlog",
				element: lazyLoad(React.lazy(() => import("@/views/link/myBlog/index"))),
				meta: {
					requiresAuth: true,
					title: "Personal blog",
					key: "myBlog"
				}
			}
		]
	}
];

export default linkRouter;
