import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'
import Item from '@/pages/_itemAlias'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/:itemAlias',
    name: 'itemAlias',
    component: Item
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
