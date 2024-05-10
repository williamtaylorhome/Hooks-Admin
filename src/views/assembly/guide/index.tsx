import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import { Button, Alert } from "antd";
import steps from "./steps";

const Guide = () => {
	const driver = new Driver({
		animate: true, // whether to animate when changing the highlighted element,
		opacity: 0.75, // Background opacity (0 means only popups, no overlays)
		doneBtnText: "Come to an end", // The text on the last button
		closeBtnText: "Shut down", // The text on the Close button for this step
		nextBtnText: "Next", // The next button text for this step
		prevBtnText: "Previous" // The text of the previous button for this step
	});

	const guide = () => {
		driver.defineSteps(steps);
		driver.start();
		console.log(driver, "driver");
	};
	return (
		<div className="card content-box">
			<Alert
				message="Landing pages are useful for those who are new to the project, and you can give you a brief description of the project's features. This demo is based on driver.js."
				style={{ width: "100%" }}
				type="warning"
			/>
			<div style={{ margin: "15px auto" }}>
				<Button type="primary" id="antd-button" onClick={guide}>
					Open the pilot page 🤹‍♂️
				</Button>
			</div>
		</div>
	);
};

export default Guide;
