interface SvgProps {
	name: string; // The name of the icon ==> must be passed
	color?: string; //The color of the icon ==> is not required
	prefix?: string; // Icon prefix ==> (default is "icon")
	iconStyle?: { [key: string]: any }; // Icon style ==> Not required
}

export default function SvgIcon(props: SvgProps) {
	const { name, prefix = "icon", iconStyle = { width: "100px", height: "100px" } } = props;
	const symbolId = `#${prefix}-${name}`;
	return (
		<svg aria-hidden="true" style={iconStyle}>
			<use href={symbolId} />
		</svg>
	);
}
