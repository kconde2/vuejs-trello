import Vue from 'vue'
// import App from './App.vue'
import Init from './components/Form/Init.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Init),
}).$mount('#app')
