import Vue from 'vue'
import App from './App.vue'
// import myPannel from '@/components/myPannel.vue'
//(组件名字：组件对象)
// Vue.component('myPannel',myPannel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
