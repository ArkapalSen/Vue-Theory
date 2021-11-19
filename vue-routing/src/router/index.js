import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About  from '../views/About.vue'
import Jobs  from '../views/jobs/Jobs.vue'
import JobDetails  from '../views/jobs/jobDetails.vue'
import ErrorPage  from '../views/notFound404.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component : About
  
  },
  {
    path: '/jobs',
    name : 'Jobs',
    component : Jobs
  },
  {
    path: '/jobs/:id',
    name : 'JobDetails',
    component : JobDetails,
    props : true,
  },
  //redirect any other site to one
  {
    path : '//all-jobs',
    redirect : '/jobs'
  },
  //catch all wrong urls
  {
    path : '/:catchAll(.*)',
    name : 'ErrorPage',
    component : ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
