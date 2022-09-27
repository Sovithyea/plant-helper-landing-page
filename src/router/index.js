import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:()=>import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component:()=>import('../views/Contact.vue')
  },
  {
    path: '/crop',
    name: 'crop',
    component:()=>import('../views/Crop.vue')
  },

  {
    path: '/getCrop/:category',
    name: 'cropCategory',
    component: () => import('../views/CropCategory.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
