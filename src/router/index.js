import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Brazil from '../views/BrazilView.vue'
import Hawaii from '../views/HawaiiView.vue'
import Jamaica from '../views/JamaicaView.vue'
import Panama from '../views/PanamaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: Hawaii
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: Jamaica
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
