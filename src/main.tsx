import ReactDOM from "react-dom";
import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "@/assets/fonts/font.less";
// import "antd/dist/antd.less";
import "@/styles/common.less";
import "@/language/index";
import "virtual:svg-icons-register";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "@/App";

// react 17 created, the console will report an error, temporarily does not affect the use (the menu will not flash when folded)
ReactDOM.render(
	// * React strict mode
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	// </react.strict mode>,
	document.getElementById("root")
);

// import ReactDOM from "react-dom/client";
// react 18 create(will cause the antd menu to flash when folded, waiting for official fix)
// ReactDOM.createRoot(document.getElementById("root")!). render(
// 	// * React Strict Mode
// 	// <React.StrictMode>
// 	<Provider store={store}>
// 		<PersistGate persistor={persistor}>
// 			<App />
// 		</PersistGate>
// 	</Provider>
// 	// </React.StrictMode>
// );
