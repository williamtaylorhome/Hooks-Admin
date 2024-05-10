import { useState } from "react";
import { useEcharts } from "@/hooks/useEcharts";
import "echarts-liquidfill";
import "./RealTimeAccessChart.less";

const RealTimeAccessChart = () => {
	let data = 0.5;
	const option = {
		title: [
			{
				text: (data * 100).toFixed(0) + "%",
				left: "49%",
				top: "35%",
				textAlign: "center",
				textStyle: {
					fontSize: "14",
					fontWeight: "normal",
					color: "#ffffff",
					align: "center",
					textBorderColor: "rgba(0, 0, 0, 0)",
					textShadowColor: "#000",
					textShadowBlur: 0,
					textShadowOffsetX: 0,
					textShadowOffsetY: 1
				}
			},
			{
				text: "Number of appointments",
				left: "49%",
				top: "25%",
				textAlign: "center",
				textStyle: {
					fontSize: "15",
					fontWeight: "normal",
					color: "#ffffff",
					align: "center",
					textBorderColor: "rgba(0, 0, 0, 0)",
					textShadowColor: "#000",
					textShadowBlur: 0,
					textShadowOffsetX: 0,
					textShadowOffsetY: 1
				}
			}
		],
		grid: {
			top: "0",
			left: "0px",
			right: "0px",
			bottom: "0",
			containLabel: true
		},
		polar: {
			radius: ["75%", "85%"],
			center: ["50%", "50%"]
		},
		angleAxis: {
			max: 120,
			clockwise: false,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			},
			startAngle: 188
		},
		radiusAxis: {
			type: "category",
			show: true,
			axisLabel: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [
			{
				type: "liquidFill",
				radius: "70%",
				z: 2,
				center: ["50%", "50%"],
				data: [0.4, 0.4, 0.4], // The number of data represents the number of waves
				itemStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#35FAB6" // color at 0%.
							},
							{
								offset: 1,
								color: "rgba(40, 209, 247,0.3)" // Color at 100%.
							}
						],
						global: false // The default is false
					}
				},
				outline: {
					borderDistance: 0,
					itemStyle: {
						borderWidth: 2,
						borderColor: "#31d8d5",
						shadowBlur: 20,
						shadowColor: "#50c1a7"
					}
				},
				label: {
					show: false
				},
				backgroundStyle: {
					borderWidth: 1,
					// For radial gradient, the first three parameters are the center of the circle x, y and radius, and the values are the same as those of linear gradient
					color: {
						type: "radial",
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: "#0D2648" // color at 0%.
							},
							{
								offset: 0.8,
								color: "#0D2648" // Color at 100%.
							},
							{
								offset: 1,
								color: "#228E7D" // Color at 100%.
							}
						],
						global: false // The default is false
					}
				}
			},
			{
				type: "pie",
				radius: ["80%", "80%"],
				center: ["50%", "50%"],
				z: 1,
				label: {
					show: false
				},
				silent: true,
				itemStyle: {
					borderWidth: 2,
					borderType: [8, 10],
					borderDashOffset: 15,
					borderColor: "#31d8d5",
					color: "#11144e",
					borderCap: "round"
				},
				data: [100]
			},
			{
				type: "bar",
				data: [55],
				z: 10,
				coordinateSystem: "polar",
				roundCap: true,
				color: "#31d8d5"
			}
		]
	};
	const [echartsRef] = useEcharts(option, data);
	const [actualTotal] = useState("216908");
	return (
		<>
			<div className="actual-total">
				<div className="expect-total">
					The total amount of reservations available<i>999999</i>people
				</div>
				<div className="actual-total">
					{actualTotal.split("").map((item, index) => {
						return (
							<div className="actual-item" key={index}>
								{item}
							</div>
						);
					})}
					<div className="actual-item">people</div>
				</div>
			</div>
			<div ref={echartsRef} className="actual-echarts"></div>
		</>
	);
};

export default RealTimeAccessChart;
