import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.set(object, propertyName, value)

new Vue({
  render: h => h(App),
}).$mount('#app')
