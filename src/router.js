import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'
import Slides from './views/Slides.vue'
import Test from './views/Test.vue'
// const Error404 = () =>
//   import(/* webpackChunkName: "din-error" */ './views/Error404.vue')
// const Agreement = () =>
//   import(/* webpackChunkName: "din-agreement" */ './views/Agreement.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
    },
    {
      path: '/slides',
      name: 'Slides',
      component: Slides,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }
  ],
})
