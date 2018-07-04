<template lang="pug">
nav.navbar.navbar-expand-md.navbar-light.navbar-laravel
  .container
    router-link.navbar-brand(to="/") SAFI
    button.navbar-toggler(
      type='button',
      data-toggle='collapse',
      data-target='#navbarSupportedContent',
      aria-controls='navbarSupportedContent',
      aria-expanded='false',
      aria-label='Toggle navigation'
    )
      span.navbar-toggler-icon
    #navbarSupportedContent.collapse.navbar-collapse
      // Left Side Of Navbar
      ul.navbar-nav.mr-auto
      // Right Side Of Navbar
      ul.navbar-nav.ml-auto
        // Authentication Links
        div.d-flex(v-if="!$root.user")
          li
            router-link.nav-link(to="/login") Login
          li
            router-link.nav-link(to="/register") Register
        div.flex(v-else)
          li.nav-item.dropdown
            a#navbarDropdown.nav-link.dropdown-toggle(
              role='button',
              data-toggle='dropdown',
              aria-haspopup='true',
              aria-expanded='false'
            )
              span.caret
            .dropdown-menu(aria-labelledby='navbarDropdown')
              a.dropdown-item(
                @click.prevent="logout"
              ) Logout
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {

  /**
   * The data object for the Vue
   * instance that can be accessed
   * as vm.$data or this[{property}]
   * ------------------------------
   * @member {Object | Function}
   * @return {Object}
   */
  data: function () {
    return {
      // ...
    }
  },

  /**
   * Computed properties to be
   * mixed into the Vue instance.
   * All getters and setters have
   * their this context automatically
   * bound to the Vue instance.
   * ------------------------------
   * @member {Object}
   */
  computed: {

    ...mapGetters([
      '$me',
      '$client'
    ])
  },

  /**
   * The main instance methods of
   * the component.
   * ------------------------------
   * @member {Object} methods
   */
  methods: {

    /**
     * Logout the user.
     *
     * ------------------------------
     * @member {function} logout
     */
    logout () {
      axios.post(`/logout`, this.$data).then(({ data }) => {
        console.log(data)
        this.$root.setUser(null)
        this.$go('welcome')
      }).catch(err => {
        console.log(err)
      })
    }
  },

  /**
   * The mounted hook life-cycle of
   * the component instance.
   * ------------------------------
   * @member {Function}
   */
  mounted () {
    console.log(this.$options.__file)
  }
}
</script>
