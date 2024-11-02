import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import pageView from '../views/pageView.vue' 페이지 추가 방법

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    // {
    //   path: '/page',
    //   name: 'page',
    //   component: pageView
    // }, 작성 후 views 폴더에 vue 추가 -> App.vue 수정하기
  ]
})

export default router
