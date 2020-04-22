import Vue from 'vue'
import App from './App.vue'
import createMsgBox from './components/MsgBox/createMsgBox';

Vue.prototype.$createMsgBox = createMsgBox;

new Vue({
  el: '#app',
  render: h => h(App)
})
