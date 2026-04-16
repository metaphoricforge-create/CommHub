import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import Chat from './views/Chat.vue'
import Profile from './views/Profile.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router