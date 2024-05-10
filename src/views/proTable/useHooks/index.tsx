import { useEffect } from "react";
import { Table, DatePicker, Button, Space } from "antd";
import useAuthButtons from "@/hooks/useAuthButtons";

import "./index.less";

const UseHooks = () => {
	// button permissions
	const { BUTTONS } = useAuthButtons();
	const { RangePicker } = DatePicker;

	useEffect(() => {
		console.log(BUTTONS);
	}, []);

	const dataSource = [
		{
			key: "1",
			name: "Hu Yanbin",
			age: 32,
			address: "No. 1 Hudi Park, West Lake District"
		},
		{
			key: "2",
			name: "Hu Yanzu",
			age: 42,
			address: "No. 1 Hudi Park, West Lake District"
		},
		{
			key: "3",
			name: "Liu Yanzu",
			age: 18,
			address: "No. 1 Hudi Park, West Lake District"
		},
		{
			key: "4",
			name: "Liu Yanzu",
			age: 18,
			address: "Room 1001, Building 2, Dump Garden, Dump Street"
		},
		{
			key: "5",
			name: "Liu Yanzu",
			age: 18,
			address: "Room 1001, Building 2, Dump Garden, Dump Street"
		}
	];

	const columns: any[] = [
		{
			title: "name",
			dataIndex: "name",
			key: "name",
			align: "center"
		},
		{
			title: "age",
			dataIndex: "age",
			key: "age",
			align: "center"
		},
		{
			title: "address",
			dataIndex: "address",
			key: "address",
			align: "center",
			width: "50%"
		}
	];
	return (
		<div className="card content-box">
			<div className="date">
				<span>Look at me when switching internationalization 😎 ：</span>
				<RangePicker />
			</div>
			<div className="auth">
				<Space>
					{BUTTONS.add && <Button type="primary">I am Admin && User The button to be able to see</Button>}
					{BUTTONS.delete && <Button type="primary">I am Admin The button to be able to see</Button>}
					{BUTTONS.edit && <Button type="primary">I am User The button to be able to see</Button>}
				</Space>
			</div>
			<Table bordered={true} dataSource={dataSource} columns={columns} />
		</div>
	);
};

export default UseHooks;
