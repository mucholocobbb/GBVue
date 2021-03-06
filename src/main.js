import Vue from 'vue'
import App from './App.vue'
import SoundBtn from './components/SoundBtn'
import MoneyApp from './components/money/MoneyApp'
import CalcApp from './components/calc/Calculator'
import ModalPlugin from './plugins/ModalWin'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(ModalPlugin, {
  someOption: true
})
Vue.component('SoundBtn', SoundBtn)
Vue.component('MoneyApp', MoneyApp)
Vue.component('CalcApp', CalcApp)


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')