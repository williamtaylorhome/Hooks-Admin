import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// echarts module
const formRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Echarts"
		},
		children: [
			{
				path: "/echarts/waterChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/waterChart/index"))),
				meta: {
					requiresAuth: true,
					title: "Water type diagram",
					key: "waterChart"
				}
			},
			{
				path: "/echarts/columnChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/columnChart/index"))),
				meta: {
					requiresAuth: true,
					title: "histogram",
					key: "columnChart"
				}
			},
			{
				path: "/echarts/lineChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/lineChart/index"))),
				meta: {
					requiresAuth: true,
					title: "Line chart",
					key: "lineChart"
				}
			},
			{
				path: "/echarts/pieChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/pieChart/index"))),
				meta: {
					requiresAuth: true,
					title: "Pie charts",
					key: "pieChart"
				}
			},
			{
				path: "/echarts/radarChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/radarChart/index"))),
				meta: {
					requiresAuth: true,
					title: "Radar chart",
					key: "radarChart"
				}
			},
			{
				path: "/echarts/nestedChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/nestedChart/index"))),
				meta: {
					requiresAuth: true,
					title: "Nested donut charts",
					key: "nestedChart"
				}
			}
		]
	}
];

export default formRouter;
