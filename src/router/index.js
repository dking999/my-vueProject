import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import ForecastPage from '@/pages/detail/forecast'
import CountPage from '@/pages/detail/count'
import AnalysisPage from '@/pages/detail/analysis'
import PublishPage from '@/pages/detail/publish'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/', // 到时候地址栏会显示的路径
      name: 'IndexPage',
      /* component: {
        viewA: TestComponent,
      }, */
      component: IndexPage // TestComponent是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'forecast',
          component: ForecastPage
        },
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          component: PublishPage
        }
      ]
    }
  ]
})
