import { useEcharts } from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";
import echarts from "@/utils/echarts";
import mapJson from "../assets/china.json";
import "./ChinaMapChart.less";

const ChinaMapChart = () => {
	echarts.registerMap("china", mapJson as any);
	/* echarts sysmbol */
	let planePath: string =
		"path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
	let data = [
		{
			fromName: "Beijing",
			toName: "Shanghai",
			coords: [
				[116.4551, 40.2539],
				[121.4648, 31.2891]
			]
		},
		{
			fromName: "Shanghai",
			toName: "Beijing",
			coords: [
				[121.4648, 31.2891],
				[116.4551, 40.2539]
			]
		},
		{
			fromName: "Beijing",
			toName: "Guangzhou",
			coords: [
				[116.4551, 40.2539],
				[113.5107, 23.2196]
			]
		},
		{
			fromName: "Guangzhou",
			toName: "Beijing",
			coords: [
				[113.5107, 23.2196],
				[116.4551, 40.2539]
			]
		},
		{
			fromName: "Beijing",
			toName: "Chengdu",
			coords: [
				[116.4551, 40.2539],
				[103.9526, 30.7617]
			]
		},
		{
			fromName: "Chengdu",
			toName: "Beijing",
			coords: [
				[103.9526, 30.7617],
				[116.4551, 40.2539]
			]
		},
		{
			fromName: "Chengdu",
			toName: "Xinjiang Uygur Autonomous Region",
			coords: [
				[103.9526, 30.7617],
				[85.294711, 41.371801]
			]
		},
		{
			fromName: " Xinjiang Uygur Autonomous Region",
			toName: "Chengdu",
			coords: [
				[85.294711, 41.371801],
				[103.9526, 30.7617]
			]
		}
	];

	const option: EChartsOption = {
		// Floating window
		tooltip: {
			trigger: "item",
			formatter: function (params: any) {
				return `${params.name}: ${params.value || "-"}`;
			}
		},
		// Echarts size position
		grid: {
			left: "0px",
			right: "80px",
			top: "10px",
			bottom: "10px"
		},
		geo: {
			map: "china",
			zoom: 1.5,
			center: [102.848234, 32.82333],
			scaleLimit: {
				min: 0.8
			},
			label: {
				color: "#fff",
				show: true
			},
			emphasis: {
				label: {
					color: "#fff",
					show: true
				},
				itemStyle: {
					areaColor: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#073684" // color at 0%.
							},
							{
								offset: 1,
								color: "#2B91B7" // Color at 100%.
							}
						]
					}
				}
			},
			roam: false,
			itemStyle: {
				areaColor: {
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: "#073684" // color at 0%.
						},
						{
							offset: 1,
							color: "#061E3D" // Color at 100%.
						}
					]
				},
				borderColor: new echarts.graphic.LinearGradient(
					0,
					0,
					0,
					1,
					[
						{
							offset: 0,
							color: "#00F6FF"
						},
						{
							offset: 1,
							color: "#87ADCB"
						}
					],
					false
				),
				shadowColor: "rgba(10,76,139,1)",
				shadowOffsetY: 0,
				shadowBlur: 60,
				borderWidth: 1
			},
			tooltip: {
				show: false
			}
		},
		// The scatter data to be displayed
		series: [
			{
				name: "",
				type: "lines",
				coordinateSystem: "geo",
				zlevel: 1,
				effect: {
					show: true,
					period: 6,
					trailLength: 0.7,
					color: "red", //The color of the arrow arrow
					symbolSize: 3
				},
				lineStyle: {
					color: "#fff",
					width: 0,
					curveness: 0.2
				},
				data
			},
			{
				name: "",
				type: "lines",
				coordinateSystem: "geo",
				zlevel: 2,
				symbol: ["none", "arrow"],
				symbolSize: 10,
				effect: {
					show: true,
					period: 6,
					trailLength: 0,
					symbol: planePath,
					symbolSize: 15
				},
				lineStyle: {
					color: "#fff",
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				},
				data
			}
		]
	};

	const [echartsRef] = useEcharts(option, data);

	return (
		<div className="content-box">
			<div className="map-ball"></div>
			<div ref={echartsRef} className="echarts"></div>
		</div>
	);
};

export default ChinaMapChart;