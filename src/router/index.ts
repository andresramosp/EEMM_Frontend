import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import { useNavManager } from '@/composables/useNavManager.js'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/Profile',
      name: 'profile',
      component: ProfileView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  useNavManager().setCurrentItem(to)
  next()
})

export default router
