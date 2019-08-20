import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const constantRouterMap= [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/reader/:id',
    name: 'reader',
    component: () => import('../components/Reader'),
  },
  {
    path: '/bookdetail/:id',
    name: 'bookdetail',
    component: () => import('../components/BookDetail'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../components/Category'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login'),
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../components/Regist'),
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../components/Personal'),
  }
]
export const asyncRouterMap = [
  {
    path: '/permission',
    meta: {
      roles: ['admin']
    },
    component: () => import('../components/permission'),
  }

]
export const last=[
  {
    path: '/401',
    component: () => import('@/components/errorPage/401'),
    name: 'page401',
    meta: {title: 'page401', noCache: true}
  },
  {
    path: '/404',
    component: () => import('@/components/errorPage/404'),
    name: 'page404',
    meta: {title: 'page404', noCache: true}
  },
  { path: '/*', redirect: '/404', hidden: true }
]
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes:constantRouterMap
})
