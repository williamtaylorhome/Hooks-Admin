import * as echarts from "echarts";
import { useEffect, useRef } from "react";
/**
 * @description Use Echarts (just to add chart responsiveness)
 * @param {Element} data data is currently only for the second Hooks-admin, some data is written dead in options, so data is optional, you can modify it yourself according to the project
 * @param {Object} options Parameters for drawing Echarts (required)
 * @return chart
 * */
export const useEcharts = (options: echarts.EChartsCoreOption, data?: any) => {
	const myChart = useRef<echarts.EChartsType>();
	const echartsRef = useRef<HTMLDivElement>(null);

	const echartsResize = () => {
		echartsRef && myChart?.current?.resize();
	};

	useEffect(() => {
		if (data?.length !== 0) {
			myChart?.current?.setOption(options);
		}
	}, [data]);

	useEffect(() => {
		if (echartsRef?.current) {
			myChart.current = echarts.init(echartsRef.current as HTMLDivElement);
		}
		myChart?.current?.setOption(options);
		window.addEventListener("resize", echartsResize, false);
		return () => {
			window.removeEventListener("resize", echartsResize);
			myChart?.current?.dispose();
		};
	}, []);

	return [echartsRef];
};
