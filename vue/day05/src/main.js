import Vue from 'vue'
import App from './App.vue'

// 引入svg icon
import './icons'
import SvgIcon from '@/components/SvgIcon.vue';
Vue.component("svg-icon", SvgIcon);

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 引入vueRouter
import router from './router'

// 引入permission
import './permission'

// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
