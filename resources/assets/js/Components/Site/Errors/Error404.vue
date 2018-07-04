<template lang='pug'>
.container
  h1 Error 404
  p Lo sentimos no pudimos encontrar lo que estas buscando
  p
    | Encuentra 
    router-link(to="/") aquí 
    | regresa al inicio!
</template>

<script>
export default {

  /**
   * Called after the instance has been mounted,
   * where el is replaced by the newly created vm.$el.
   * <br> ------------------------------ <br>
   * {@link https://vuejs.org/v2/api/#mounted}
   * {@link https://vuejs.org/v2/api/#Options-Lifecycle-Hooks}
   * @memberOf Eror404
   */
  mounted () {
    console.log('this.$options.__file')
    this.$store.commit('setHttpStatus', 404)
  }
}
</script>
