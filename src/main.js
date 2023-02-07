import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Web3 from 'web3'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.less'
import './assets/font/iconfont.css'
require('./Mock')
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import {parseTime} from './utils'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'	//样式
import i18n from './i18n/';


Vue.use(ElementUI);
Vue.prototype.Web3 = Web3;

function jiequ(str) { //截取小数点后两位
	if (String(str).indexOf(".") > -1) {
		var temp = Number(str);
		temp = Math.floor(temp * 1000) / 1000;
		temp = temp.toFixed(3);
		return temp
	} else {
		return str
	}
}
Vue.prototype.$jq = jiequ;
Vue.prototype.$http = httpRequest // ajax请求方法

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false
Vue.filter('parseTime', (v) => parseTime(v,'{y}-{m}-{d}'))
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
