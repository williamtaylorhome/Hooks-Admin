import { Tabs } from "antd";
import Pie from "./components/pie";
import Curve from "./components/curve";
import "./index.less";
import BookSum from "./images/book-sum.png";
import AddPerson from "./images/add_person.png";
import AddTeam from "./images/add_team.png";
import Today from "./images/today.png";
import BookSum1 from "./images/book_sum.png";

const { TabPane } = Tabs;

const DataVisualize = () => {
	const onChange = (key: string) => {
		console.log(key);
	};

	const tabsList = [
		{ label: "7 days in the future", name: 1 },
		{ label: "7 days in the last 7 days", name: 2 },
		{ label: "Nearly a month", name: 3 },
		{ label: "Nearly three months", name: 4 },
		{ label: "Nearly half a year", name: 5 },
		{ label: "Nearly a year", name: 6 }
	];

	return (
		<div className="dataVisualize-box">
			<div className=" card top-box">
				<div className="top-title">Data visualization</div>
				<Tabs defaultActiveKey="1" onChange={onChange}>
					{tabsList.map(item => {
						return <TabPane tab={item.label} key={item.name}></TabPane>;
					})}
				</Tabs>
				<div className="top-content">
					<div className="item-left sle">
						<span className="left-title">Total number of visits</span>
						<div className="img-box">
							<img src={BookSum} alt="" />
						</div>
						<span className="left-number">848.132w</span>
					</div>
					<div className="item-center">
						<div className="gitee-traffic traffic-box">
							<div className="traffic-img">
								<img src={AddPerson} alt="" />
							</div>
							<span className="item-value">2222</span>
							<span className="traffic-name sle">Gitee Visits</span>
						</div>
						<div className="gitHub-traffic traffic-box">
							<div className="traffic-img">
								<img src={AddTeam} alt="" />
							</div>
							<span className="item-value">2222</span>
							<span className="traffic-name sle">GitHub Visits</span>
						</div>
						<div className="today-traffic traffic-box">
							<div className="traffic-img">
								<img src={Today} alt="" />
							</div>
							<span className="item-value">4567</span>
							<span className="traffic-name sle">today Visits</span>
						</div>
						<div className="yesterday-traffic traffic-box">
							<div className="traffic-img">
								<img src={BookSum1} alt="" />
							</div>
							<span className="item-value">1234</span>
							<span className="traffic-name sle">yesterday Visits</span>
						</div>
					</div>
					<div className="item-right">
						<div className="echarts-title">Gitee / GitHub Visits Occupancy</div>
						<div className="book-echarts">
							<Pie />
						</div>
					</div>
				</div>
			</div>
			<div className="card bottom-box">
				<div className="bottom-title">Data source</div>
				<div className="bottom-tabs">
					<Tabs defaultActiveKey="1" onChange={onChange}>
						{tabsList.map(item => {
							return <TabPane tab={item.label} key={item.name}></TabPane>;
						})}
					</Tabs>
				</div>
				<div className="curve-echarts">
					<Curve />
				</div>
			</div>
		</div>
	);
};

export default DataVisualize;
