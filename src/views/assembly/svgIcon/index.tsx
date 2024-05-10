import { Alert, Descriptions } from "antd";
import SvgIcon from "@/components/svgIcon";
import "./index.less";

const svgIcon = () => {
	return (
		<div className="card content-box">
			<Alert
				message="SVG icons are currently done using the vite-plugin-svg-icons plugin, please check the official documentation :https://github.com/vbenjs/vite-plugin-svg-icons"
				style={{ width: "100%" }}
				type="warning"
			/>
			<br />
			<div className="icon-list">
				<SvgIcon name="xianxingdaoyu" />
				<SvgIcon name="xianxingdiqiu" />
				<SvgIcon name="xianxingditu" />
				<SvgIcon name="xianxingfanchuan" />
				<SvgIcon name="xianxingfeiji" />
				<SvgIcon name="xianxinglvhangriji" />
				<SvgIcon name="xianxingtianqiyubao" />
				<SvgIcon name="xianxingxiangjipaizhao" />
				<SvgIcon name="xianxingxiarilengyin" />
				<SvgIcon name="xianxingyoulun" />
				<SvgIcon name="xianxingxiarilengyin" />
			</div>
			<Descriptions title="Configuration items 📚" bordered className="antd-descriptions" column={1}>
				<Descriptions.Item label="name">The name of the icon, the SVG icon must be stored in the src/assets/icons directory</Descriptions.Item>
				<Descriptions.Item label="prefix">The prefix of the icon, which is the default icon</Descriptions.Item>
				<Descriptions.Item label="iconStyle"> The style of the icon, the default style is {"{ width: 100px, height: 100px}"} </Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default svgIcon;
