import Vue from 'vue'
import App from './App.vue'
import SoundBtn from './components/SoundBtn'
import MoneyApp from './components/money/MoneyApp'
import CalcApp from './components/calc/Calculator'
import ModalPlugin from './plugins/ModalWin'
import store from './store'
import router from './router'

Vue.use(ModalPlugin, { someOption: true })
Vue.component('SoundBtn', SoundBtn)
Vue.component('MoneyApp', MoneyApp)
Vue.component('CalcApp', CalcApp)


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')