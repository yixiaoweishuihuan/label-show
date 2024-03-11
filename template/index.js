import Vue from 'vue'
import Label from '../src/main'
import App from './App.vue'

Vue.use(Label)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
