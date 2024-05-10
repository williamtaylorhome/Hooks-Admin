import { useTimes } from "@/hooks/useTime";
const DataHeaderTime = () => {
	const { time } = useTimes();

	return <span className="header-time">Current time:{time}</span>;
};

export default DataHeaderTime;
