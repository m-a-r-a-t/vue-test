import { createRouter, createWebHistory } from 'vue-router'
import Currencies from '../views/Currencies.js'
import Converter from '../views/Converter.js'

const routes = [
  {
    path: '/',
    redirect: (to) => {
      return { path: '/converter' }
    },
  },
  {
    path: '/converter',

    component: Converter,
  },
  {
    path: '/currencies',

    component: Currencies,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
