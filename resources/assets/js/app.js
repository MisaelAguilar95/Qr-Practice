  // import env from '@/env'
import '@/bootstrap'
import '@/Components/Prototype.js'
import '@/Components/Directives.js'
import '@/Components/Globals'
import store from '@/Store'
import router from '@/Routes/Router'
import Vue from 'vue'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue
export default new Vue({

  /**
   * The Dom element where the
   * root instance wil be render.
   * ------------------------------
   * @member {string} el
   */
  el: '#app',

  /**
   * The VueRouter Instance.
   * ------------------------------
   * @member {Object} router
   */
  router,

  /**
   * The Vuex Instance.
   * ------------------------------
   * @member {Object} store
   */
  store,

  /**
   * The main instance reactive
   * properties of the component.
   * ------------------------------
   * @member {Object}}
   */
  data: {
    //
  },

  /**
   * The main instance methods of
   * the component.
   * ------------------------------
   * @member {Object} methods
   */
  methods: {
    //
  },

  /**
   * The mounted hook life-cycle of
   * the component instance.
   * ------------------------------
   * @member {Function}
   */
  mounted () {
    //
  }
})
