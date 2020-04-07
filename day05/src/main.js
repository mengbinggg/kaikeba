import Vue from 'vue'
import App from './App.vue'
import './icons'
import SvgIcon from '@/components/SvgIcon.vue';
Vue.component("svg-icon", SvgIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
