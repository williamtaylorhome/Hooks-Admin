import { useEcharts } from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";
import "./AnnualUseChart.less";

interface ChartProp {
	label: string;
	value: string[];
}

const AnnualUseChart = () => {
	const gradientColors = ["rgba(254, 219, 101,0.1)", "rgba(0, 122, 254,0.1)", "rgba(255, 75, 122, 0.1)"];
	let annualData = [
		{
			label: new Date().getFullYear() - 2 + "year",
			value: ["184", "90", "120", "0", "30", "100", "80", "40", "20", "510", "350", "180"]
		},
		{
			label: new Date().getFullYear() - 1 + "year",
			value: ["118", "509", "366", "162", "380", "123", "321", "158", "352", "474", "154", "22"]
		},
		{
			label: new Date().getFullYear() + "year",
			value: ["548", "259", "113", "90", "69", "512", "23", "49", "28", "420", "313", "156"]
		}
	];
	let data = {
		data: annualData,
		unit: annualData.map(val => val.label),
		columns: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
		colors: ["#FFA600", "#007AFE", "#FF4B7A"]
	};
	const option: EChartsOption = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "none"
			},
			borderWidth: 0, //Border line width
			padding: 0,
			backgroundColor: "transparent",
			formatter: (p: any) => {
				let str = "";
				p.forEach((val: any) => {
					str += `
          <div class="year-item">
            <span class="year-dot" style="background-color: ${val.color};"></span>
            <span class="year-name">${val.seriesName}</span>
            <span class="year-value">${val.data >= 10000 ? (val.data / 10000).toFixed(2) + "w" : val.data}</span>
          </div>
          `;
				});
				let dom = `
                    <div class="annual-tooTip">
                      <span class="annual-month">${p[0].dataIndex + 1}month</span>
                      <div class="annual-list">
                        ${str}
                      </div>
                    </div>
                  `;
				return dom;
			}
		},
		legend: {
			right: "2%",
			top: "0%",
			itemWidth: 15,
			itemHeight: 6,
			align: "auto",
			icon: "rect",
			itemGap: 15,
			textStyle: {
				color: "#ebebf0"
			}
		},
		grid: {
			top: "20%",
			left: "40",
			right: "4%",
			bottom: "15%"
			// containLabel: true
		},
		xAxis: [
			{
				name: "(month)",
				type: "category",
				boundaryGap: false,
				axisLine: {
					//Axis line related settings. Mathematically the x-axis
					show: true,
					lineStyle: {
						color: "#233653"
					}
				},
				axisLabel: {
					//The relevant settings for axis scale labels
					color: "#7ec7ff",
					padding: 0,
					fontSize: 12,
					formatter: function (data) {
						return data;
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: "#192a44"
					}
				},
				axisTick: {
					show: false
				},
				data: data.columns
			}
		],
		yAxis: {
			name: "(Number of people)",
			nameTextStyle: {
				color: "#D6DFEA",
				fontSize: 12,
				padding: [0, 30, 0, 0]
			},
			// nameGap:18,
			minInterval: 1,
			// min: 4,
			splitNumber: 5,
			splitLine: {
				show: false,
				lineStyle: {
					color: "#192a44"
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#233653"
				}
			},
			axisLabel: {
				show: true,
				color: "#B9D6D6",
				padding: 0,
				formatter: function (value: any) {
					if (value >= 10000) {
						value = value / 10000 + "w";
					}
					return value;
				}
			},
			axisTick: {
				show: false
			}
		},
		series: data.data.map((val: ChartProp, index: number) => {
			return {
				name: val.label,
				type: "line",
				symbol: "circle", // The default is a hollow circle (white in the middle), and it is changed to a solid circle
				showSymbol: false,
				smooth: true,
				lineStyle: {
					width: 1,
					color: data.colors[index], // Line color
					borderColor: data.colors[index]
				},
				itemStyle: {
					color: data.colors[index],
					borderColor: "#646ace",
					borderWidth: 2
				},
				tooltip: {
					show: true
				},
				areaStyle: {
					//Area fill style
					//Linear gradient, the first 4 parameters are x0, y0, x2, y2 (range 0~1); Equivalent to a percentage in the graphics bounding box. If the last parameter is 'true', then those four values are absolute pixel positions.
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: data.colors[index] // color at 0%.
							},
							{
								offset: 1,
								color: gradientColors[index] // Color at 100%.
							}
						],
						global: false // The default is false
					},
					shadowColor: "rgba(25,163,223, 0.3)", //Shadow color
					shadowBlur: 20 //shadowBlur Sets the blur size of the graphics shadow. cooperate shadowColor,shadowOffsetX/Y, Sets the shadow effect of the graphic.
				},
				data: val.value
			};
		})
	};
	const [echartsRef] = useEcharts(option, data);
	return <div ref={echartsRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default AnnualUseChart;
