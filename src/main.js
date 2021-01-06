import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-UI
import ElementUI from 'element-ui'
// 引入element的所有样式
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式
import './styles/index.less'
// 注册element，所有的第三方组件库都要先引入在注册，最后才能使用
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
