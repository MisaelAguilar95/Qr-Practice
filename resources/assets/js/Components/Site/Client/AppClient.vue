<template lang="pug">
.app-client.site
  navbar
  .site-content
    transition(name=`fade`, mode='out-in')
      router-view(v-if=`$store.state.HttpStatus === 200`)
    transition(name=`fade`, mode='out-in')
      error404(v-if=`$store.state.HttpStatus === 404`)
  //- site-footer
  //- .toasts
  //-   toast(v-for=`toast in $root.toasts`, :data=`toast`)
  //- comparation-bar
</template>

<script>

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
      //
    }
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
   * The main watcher of
   * the component instance.
   * ------------------------------
   * @member {Object} watcher
   */
  watch: {
    //
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
    //
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
