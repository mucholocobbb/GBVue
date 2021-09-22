import Vue from 'vue'
import App from './App.vue'
import SoundBtn from './components/SoundBtn'
import MoneyApp from './components/money/MoneyApp'


Vue.component('SoundBtn', SoundBtn)
Vue.component('MoneyApp', MoneyApp)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')