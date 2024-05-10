// * Echarts is introduced on demand
import * as echarts from "echarts/core";
import {
	BarChart,
	// The definition suffix of the series type is SeriesOption
	BarSeriesOption,
	LineChart,
	LineSeriesOption
} from "echarts/charts";
import { LegendComponent } from "echarts/components";
import {
	TitleComponent,
	// The component type is defined with the suffix  ComponentOption
	TitleComponentOption,
	TooltipComponent,
	TooltipComponentOption,
	GridComponent,
	GridComponentOption,
	// Dataset components
	DatasetComponent,
	DatasetComponentOption,
	// Built-in data converter components (filter, sort)
	TransformComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// ComposeOption is used to combine an Option type with only the necessary components and the chart
export type ECOption = echarts.ComposeOption<
	| BarSeriesOption
	| LineSeriesOption
	| TitleComponentOption
	| TooltipComponentOption
	| GridComponentOption
	| DatasetComponentOption
>;

// Register the required components
echarts.use([
	LegendComponent,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	BarChart,
	LineChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer
]);

export default echarts;
