import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home.vue'
import City from '@/city/city.vue'
import Detail from '@/detail/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
