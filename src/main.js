import Vue from 'vue'
import vuex from './vuex/index.js'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  vuex,
  render: h => h(App),
}).$mount('#app')
