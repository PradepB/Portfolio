import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
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
    path: '/experience',
    name: 'experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/ExperienceView')
  }
  ,
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.path) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
