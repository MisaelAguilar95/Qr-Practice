<template lang='pug'>
.app
  router-view
</template>

<script>
export default {

  /**
   * A list/hash of attributes that
   * are exposed to accept data from
   * the parent component.
   * ------------------------------
   * @member {Array<string> | Object}
   */
  props: ['httpStatus'],

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
   * The main instance methods of
   * the component.
   * ------------------------------
   * @member {Object} methods
   */
  methods: {
    // ...mapActions([
    //   'loadEntities'
    // ])
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
    console.log(this.$options.__file, this)
    // this.$store.commit('setHttpStatus', parseInt(this.httpStatus))
  }
}
</script>
