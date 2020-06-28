import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import eventBus from './bus'
Vue.config.productionTip = false
Vue.prototype.$eventBus = eventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
