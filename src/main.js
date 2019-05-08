// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import EasySlider from 'vue-easy-slider'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './components/componentRegister.js'
import myLayout from './components/layout'

// 导入所有的过滤器变量
import * as custom from './filters'

// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.use(EasySlider)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { myLayout, App },
  template: '<Layout/>'
})
