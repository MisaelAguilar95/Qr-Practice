<template lang="pug">
.app-admin
  h1 Admin
  //- navbar
  //- .site-content
  //-   transition(name=`fade`, mode='out-in')
  //-     router-view(v-if=`$root.status === 200`)
  //-   transition(name=`fade`, mode='out-in')
  //-     error404(v-if=`$root.status === 404`)
  //- //- site-footer
  //- //- .toasts
  //- //-   toast(v-for=`toast in $root.toasts`, :data=`toast`)
  //- //- comparation-bar
</template>

<script>


/**
 * The Vue main instance.
 * @namespace Admin
 */
export default {

  name: 'Admin',

  /**
   * The data object for the Vue instance.
   * Vue will recursively convert its properties
   * into getter/setters to make it “reactive”
   * and these methods directly via "this".
   * <br> ------------------------------ <br>
   * {@link https://vuejs.org/v2/api/#data}
   * @memberOf Admin
   * @member {function}
   * @return {Object<mixed>}
   */
  data: function () {
    return {
      //
    }
  },

  /**
   * Methods to be mixed into the Vue instance.
   * You can access these methods directly via "this"
   * there are bound to the Vue instance.
   * <br> ------------------------------ <br>
   * {@link https://vuejs.org/v2/api/#methods}
   * @member {Object<function>}
   * @memberOf Admin
   */
  methods: {

    /**
     *
     * <br> ------------------------------ <br>
     * @return {Promise} - The promise of the routes.
     * @param {boolean} type - The routes type.
     * @memberOf Admin
     */      
    getRoutes () {
    }
  },

  /**
   * Called after the instance has been mounted,
   * where el is replaced by the newly created vm.$el.
   * <br> ------------------------------ <br>
   * {@link https://vuejs.org/v2/api/#mounted}
   * {@link https://vuejs.org/v2/api/#Options-Lifecycle-Hooks}
   * @memberOf Admin
   */
  mounted () {
    console.log('this.$options.__file')
  }
}
</script>
