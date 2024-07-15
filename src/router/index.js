import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "home" */'../views/HomeView.vue')
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import(/* webpackChunkName: "Protected" */'../views/ProtectedView.vue'),
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "LoginView" */'../views/LoginView.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import(/* webpackChunkName: "Invoices.View" */'../views/InvoicesView.vue'),
    meta :{
      requiresAuth:true,
    }
  },

  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import(/* webpackChunkName: "destination" */'../views/DestinationShow.vue'),
    props: route =>({...route.params, id : parseInt(route.params.id)}),
    beforeEnter(to){
      const exists = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if(!exists) return {name: "NotFound"}
    },

    children:[
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import(/* webpackChunkName: "ExperienceShow" */'../views/ExperienceShow.vue'),
        props: route =>({...route.params, id : parseInt(route.params.id)}),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */'../views/NotFound.vue')
  }
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({ top:0 }), 300)
    })
  }
})

router.beforeEach((to)=>{
if(to.meta.requiresAuth && !window.user){
  // need to login if not already logged in
  return {name:'login', query:{redirect:to.fullPath}}
}
})
export default router
