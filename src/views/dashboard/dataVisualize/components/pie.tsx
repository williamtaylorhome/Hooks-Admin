import { useEcharts } from "@/hooks/useEcharts";

const Curve = () => {
	const pieData: any = [
		{ value: 5000, name: "Gitee visits" },
		{ value: 5000, name: "GitHub visits" }
	];
	const option: any = {
		title: {
			text: "Gitee / GitHub",
			subtext: "Percentage of visits",
			left: "56%",
			top: "45%",
			textAlign: "center",
			textStyle: {
				fontSize: 18,
				color: "#767676"
			},
			subtextStyle: {
				fontSize: 15,
				color: "#a1a1a1"
			}
		},
		tooltip: {
			trigger: "item"
		},
		legend: {
			top: "4%",
			left: "2%",
			orient: "vertical",
			icon: "circle", //Legend shape
			align: "left",
			itemGap: 20,
			textStyle: {
				fontSize: 13,
				color: "#a1a1a1",
				fontWeight: 500
			},
			formatter: function (name: string) {
				let dataCopy = "";
				for (let i = 0; i < pieData.length; i++) {
					if (pieData[i].name == name && pieData[i].value >= 10000) {
						dataCopy = (pieData[i].value / 10000).toFixed(2);
						return name + "      " + dataCopy + "w";
					} else if (pieData[i].name == name) {
						dataCopy = pieData[i].value;
						return name + "      " + dataCopy;
					}
				}
			}
		},
		series: [
			{
				type: "pie",
				radius: ["70%", "40%"],
				center: ["57%", "52%"],
				silent: true,
				clockwise: true,
				startAngle: 150,
				data: pieData,
				labelLine: {
					length: 80,
					length2: 30,
					lineStyle: {
						width: 1
					}
				},
				label: {
					position: "outside",
					show: true,
					formatter: "{d}%",
					fontWeight: 400,
					fontSize: 19,
					color: "#a1a1a1"
				},
				color: [
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 0.5,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#feb791" // color at 0%.
							},
							{
								offset: 1,
								color: "#fe8b4c" // Color at 100%.
							}
						]
					},
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 1,
						y2: 0.5,
						colorStops: [
							{
								offset: 0,
								color: "#b898fd" // color at 0%.
							},
							{
								offset: 1,
								color: "#8347fd" // Color at 100%.
							}
						]
					}
				]
			}
		]
	};

	const [echartsRef] = useEcharts(option, pieData);
	return <div ref={echartsRef} className="content-box"></div>;
};

export default Curve;
