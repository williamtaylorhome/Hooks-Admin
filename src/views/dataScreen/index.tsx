import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import AgeRatioChart from "./components/AgeRatioChart";
import AnnualUseChart from "./components/AnnualUseChart";
import HotPlateChart from "./components/HotPlateChart";
import MaleFemaleRatioChart from "./components/MaleFemaleRatioChart";
import OverNext30Chart from "./components/OverNext30Chart";
import PlatformSourceChart from "./components/PlatformSourceChart";
import RealTimeAccessChart from "./components/RealTimeAccessChart";
import ChinaMapChart from "./components/ChinaMapChart";
import Headertime from "./components/DataHeaderTime";
import dataScreenTitle from "./images/dataScreen-title.png";
import "./index.less";

const DataScreen = () => {
	const navigate = useNavigate();
	const handleTo = () => {
		navigate(HOME_URL);
	};
	const dataScreenRef = useRef<HTMLDivElement>(null);

	/* The browser listens for the resize event*/
	const resize = () => {
		if (dataScreenRef.current) {
			dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		}
	};

	/* Inference of scaling based on browser size*/
	const getScale = (width = 1920, height = 1080) => {
		let ww = window.innerWidth / width;
		let wh = window.innerHeight / height;
		return ww < wh ? ww : wh;
	};

	useLayoutEffect(() => {
		if (dataScreenRef.current) {
			dataScreenRef.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
			dataScreenRef.current.style.width = `1920px`;
			dataScreenRef.current.style.height = `1080px`;
		}
		// Bind an event to the browser
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div className="dataScreen-container">
			<div className="dataScreen" ref={dataScreenRef}>
				<div className="dataScreen-header">
					<div className="header-lf">
						<span className="header-screening" onClick={handleTo}>
							首页
						</span>
					</div>
					<div className="header-ct">
						<div className="header-ct-title">
							<span>Smart tourism visualization big data display platform</span>
							<div className="header-ct-warning">Platform peak warning information (2 pieces)</div>
						</div>
					</div>
					<div className="header-rg">
						<span className="header-download">Statistical reports</span>
						<Headertime />
					</div>
				</div>
				<div className="dataScreen-main">
					<div className="dataScreen-lf">
						<div className="dataScreen-top">
							<div className="dataScreen-main-title">
								<span>Real-time visitor statistics</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<RealTimeAccessChart />
							</div>
						</div>
						<div className="dataScreen-center">
							<div className="dataScreen-main-title">
								<span>Male-to-female ratio</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<MaleFemaleRatioChart />
							</div>
						</div>
						<div className="dataScreen-bottom">
							<div className="dataScreen-main-title">
								<span>Age ratio</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<AgeRatioChart />
							</div>
						</div>
					</div>
					<div className="dataScreen-ct">
						<div className="dataScreen-map">
							<div className="dataScreen-map-title">Real-time passenger flow of scenic spots</div>
							<ChinaMapChart />
						</div>
						<div className="dataScreen-cb">
							<div className="dataScreen-main-title">
								<span>Trend chart of visitor volume in the next 30 days</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<OverNext30Chart />
							</div>
						</div>
					</div>
					<div className="dataScreen-rg">
						<div className="dataScreen-top">
							<div className="dataScreen-main-title">
								<span>Ranking of popular scenic spots</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<HotPlateChart />
							</div>
						</div>
						<div className="dataScreen-center">
							<div className="dataScreen-main-title">
								<span>Comparison of annual visitor volumes</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<AnnualUseChart />
							</div>
						</div>
						<div className="dataScreen-bottom">
							<div className="dataScreen-main-title">
								<span>Reservation channel statistics</span>
								<img src={dataScreenTitle} alt="" />
							</div>
							<div className="dataScreen-main-chart">
								<PlatformSourceChart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataScreen;
