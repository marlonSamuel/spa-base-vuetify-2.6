import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Vue Router
import router from './router'
// Vuex: for services, shared components, etc
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
