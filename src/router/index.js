import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import('../views/_BrazilView.vue')
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import('../views/_HawaiiView.vue')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import('../views/_JamaicaView.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import('../views/_PanamaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
