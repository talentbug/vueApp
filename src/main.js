// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 导入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import mui from './lib/js/mui.min.js'
Vue.use(MintUI)

// 导入Mint-UI轮播图样式
import {
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

// 导入MUI样式
import './lib/css/mui.min.css'
// 带入MUI扩展字体样式
import './lib/fonts/mui-icons-extra.ttf'
import './lib/css/icons-extra.css'

// 挂载axios
axios.defaults.baseURL = "http://www.lovegf.cn:8899"
Vue.prototype.$http = axios

import moment from 'moment'
// 给时间设置全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
