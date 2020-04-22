import Vue from 'vue'
import App from './App.vue'
// import store from './store';
import store from './mstore';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
