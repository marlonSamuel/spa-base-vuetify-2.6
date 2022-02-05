import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'
import PeopleIndex from '@/components/people/Index'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Default', component: Default },
  { path: '/people', name: 'People', component: PeopleIndex }
]

export default new Router({
  routes
})