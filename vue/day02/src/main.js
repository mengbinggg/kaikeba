import Vue from 'vue'
import App from './App.vue'
import MVueRouter from './mvue-router'

Vue.use(MVueRouter);

const Foo = { template: '<div>foo</div>' };
const Boo = { template: '<div>Boo</div>' };
const routes = [
  {path: '/foo', component: Foo},
  {path: '/boo', component: Boo}
]
const router = new MVueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
