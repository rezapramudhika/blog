import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleDetail from '@/components/ArticleDetail'
import ArticleContainer from '@/components/ArticleContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'ArticleContainer',
      component: ArticleContainer,
      children: [
        {
          path: ':id',
          name: 'ArticleDetail',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})
