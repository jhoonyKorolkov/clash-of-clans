import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'
import Item from '@/pages/_itemAlias'
import links from '@/seeders/items.js'

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
    component: Item,
    beforeEnter(to, from) {
      const exists = links.find(el => el.alias === to.params.itemAlias)
      if (!exists) return { name: 'notFound' }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
