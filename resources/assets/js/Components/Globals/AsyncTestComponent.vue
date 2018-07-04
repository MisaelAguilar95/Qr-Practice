<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-default">
                <div class="card-header">AsyncTestComponent</div>

                <div class="card-body">
                    I'm an AsyncTestComponent.
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

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
