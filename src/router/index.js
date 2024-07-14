import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "home" */'../views/HomeView.vue')
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import(/* webpackChunkName: "destination" */'../views/DestinationShow.vue'),
    props: route =>({...route.params, id : parseInt(route.params.id)}),
    children:[
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import(/* webpackChunkName: "home" */'../views/ExperienceShow.vue'),
        props: route =>({...route.params, id : parseInt(route.params.id)}),
      }
    ]
  },
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
