import React, { Suspense } from "react";
import { Spin } from "antd";

/**
 * @description Routes are lazy loaded
 * @param {element} comp Components that need to be accessed
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
