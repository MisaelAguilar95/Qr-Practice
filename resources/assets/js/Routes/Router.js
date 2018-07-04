import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/Routes'
import store from '@/Store'
// import User from '@/Store/Models/User'

// Set the router to the Vue Singleton.
Vue.use(VueRouter)

/**
 * The Vue router Instance.
 * @const {VueRouter}
 */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes,

  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 0 }
  }
})

/**
 * Check in the metadata if the current
 * route needs auth and handle it.
 * ----------------------------------------
 * @function
 */
router.beforeEach((to, from, next) => {
  store.commit('setHttpStatus', 200)
  let is = n => r => r.meta[n]
  let route = [].some.bind(to.matched)
  let user = window.$user
  // next()
  next(user
    ? route(is('guest')) || (route(is('admin')) && !user.is_admin)
      ? '/dashboard'
      : true
    : route(is('auth'))
      ? '/login'
      : true
  )
})

export default router
