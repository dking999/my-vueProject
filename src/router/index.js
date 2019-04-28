import Vue from 'vue'
import Router from 'vue-router'
import TestComponent from '@/components/TestComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test', // 到时候地址栏会显示的路径
      name: 'TestComponent',
      component: TestComponent, // TestComponent是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
     /* children: [
        {
          path: '/test1',
          name: 'TestComponent',
          component: TestComponent
        }
      ]*/
    }
  ]
})
