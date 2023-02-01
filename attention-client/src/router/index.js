import { createRouter, createWebHistory } from 'vue-router'
import Attention from '../views/Attention.vue'
import advancedCalls from '../advancedCalls.json'
import ReadableView from '../views/ReadableView'
const routes = [
      ... advancedCalls[0].response.map(O => ({
      path: O.path,
      name: O.header,
      component: ReadableView,
      props: {
        Text: O.content,
        Name: O.header
      }
  })),
  {
    path: '/',
    name: 'Attention',
    component: Attention
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
