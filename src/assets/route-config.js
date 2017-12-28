import App from '../components/d3/App.vue';
import Selection from '../components/selection/App.vue';
import SelectAll from '../components/selection/select.vue';


import Scales from '../components/scaleLinear/App.vue';

export default {
	'': {
		component: App						//默认
	},
		'selection': {
			component: Selection			//核心
		},
			'select': {
				component: SelectAll		//选择
			},
		'scales': {
			component: Scales
		}
}