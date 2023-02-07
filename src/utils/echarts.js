import * as echarts from 'echarts/core';
import {
	TitleComponent,
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	VisualMapComponent,
	LegendComponent,
	BrushComponent,
	DataZoomComponent
} from 'echarts/components';
import {
	CandlestickChart,
	BarChart,
	LineChart
} from 'echarts/charts';
import {
	UniversalTransition
} from 'echarts/features';
import {
	CanvasRenderer
} from 'echarts/renderers';
import VChart, {
	THEME_KEY
} from "vue-echarts";

echarts.use([
	TitleComponent,
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	// VChart,
	// THEME_KEY,
	BarChart,
	LineChart,
	CanvasRenderer,
	UniversalTransition,
	CandlestickChart,
	VisualMapComponent,
	LegendComponent,
	BrushComponent,
	DataZoomComponent
]);
export default echarts;
