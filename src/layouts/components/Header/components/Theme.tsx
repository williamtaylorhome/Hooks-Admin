import { Drawer, Divider, Switch } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import { setThemeConfig } from "@/redux/modules/global/action";
import { updateCollapse } from "@/redux/modules/menu/action";
import SwitchDark from "@/components/SwitchDark";

const Theme = (props: any) => {
	const [visible, setVisible] = useState<boolean>(false);
	const { setThemeConfig, updateCollapse } = props;
	const { isCollapse } = props.menu;
	const { themeConfig } = props.global;
	const { weakOrGray, breadcrumb, tabs, footer } = themeConfig;

	const setWeakOrGray = (checked: boolean, theme: string) => {
		if (checked) return setThemeConfig({ ...themeConfig, weakOrGray: theme });
		setThemeConfig({ ...themeConfig, weakOrGray: "" });
	};

	const onChange = (checked: boolean, keyName: string) => {
		return setThemeConfig({ ...themeConfig, [keyName]: !checked });
	};

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					setVisible(true);
				}}
			></i>
			<Drawer
				title="Layout settings"
				closable={false}
				onClose={() => {
					setVisible(false);
				}}
				visible={visible}
				width={320}
			>
				{/* Global themes */}
				<Divider className="divider">
					<FireOutlined />
					Global themes
				</Divider>
				<div className="theme-item">
					<span>Dark mode</span>
					<SwitchDark />
				</div>
				<div className="theme-item">
					<span>Gray mode</span>
					<Switch
						checked={weakOrGray === "gray"}
						onChange={e => {
							setWeakOrGray(e, "gray");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>Color deficiency mode</span>
					<Switch
						checked={weakOrGray === "weak"}
						onChange={e => {
							setWeakOrGray(e, "weak");
						}}
					/>
				</div>
				<br />
				{/* Interface settings */}
				<Divider className="divider">
					<SettingOutlined />
					Interface settings
				</Divider>
				<div className="theme-item">
					<span>Collapse the menu</span>
					<Switch
						checked={isCollapse}
						onChange={e => {
							updateCollapse(e);
						}}
					/>
				</div>
				<div className="theme-item">
					<span>Breadcrumb navigation</span>
					<Switch
						checked={!breadcrumb}
						onChange={e => {
							onChange(e, "breadcrumb");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>Tab bar</span>
					<Switch
						checked={!tabs}
						onChange={e => {
							onChange(e, "tabs");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>page footer</span>
					<Switch
						checked={!footer}
						onChange={e => {
							onChange(e, "footer");
						}}
					/>
				</div>
			</Drawer>
		</>
	);
};

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = { setThemeConfig, updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
