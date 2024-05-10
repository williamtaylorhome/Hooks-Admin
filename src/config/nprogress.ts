import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
	easing: "ease", // Animation method
	speed: 500, // Increasing the speed of the bar
	showSpinner: true, // Whether or not to display the loaded ICO
	trickleSpeed: 200, // Automatically increment intervals
	minimum: 0.3 // The minimum percentage at initialization
});

export default NProgress;
