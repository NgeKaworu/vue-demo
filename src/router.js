import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: () => import('./views/ShopList.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('./views/Other.vue'),
      children: [{
          path: '/helloworld',
          name: 'helloworld',
          component: () => import('./components/HelloWorld.vue')
        },
        {
          path: '/sudoku',
          name: 'sudoku',
          component: () => import('./components/Sudoku.vue')
        },
        {
          path: '/todoslist',
          name: 'todoslist',
          component: () => import('./components/TodosList.vue')
        },
      ]
    }
  ]
})