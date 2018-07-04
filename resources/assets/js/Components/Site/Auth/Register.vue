<template lang="pug">
.container
  .row.justify-content-center
    .col-md-8
      .card
        .card-header {{ __('Register') }}
        .card-body
          form(method='POST', action="/register")
            //- | @csrf
            .form-group.row
              label.col-md-4.col-form-label.text-md-right(for='name') {{ __('Name') }}
              .col-md-6
                input#name(type='text', class="form-control", :class="{'is-invalid': errors.name}", name='name', v-model="name", required='', autofocus='')
                span.invalid-feedback(v-if="errors.name")
                  strong {{ errors.name }}
            .form-group.row
              label.col-md-4.col-form-label.text-md-right(for='email') {{ __('E-Mail Address') }}
              .col-md-6
                input#email(type='email', class="form-control", :class="{'is-invalid': errors.email}", name='email', v-model="email", required='')
                span.invalid-feedback(v-if="errors.email")
                  strong {{ errors.email }}
            .form-group.row
              label.col-md-4.col-form-label.text-md-right(for='password') {{ __('Password') }}
              .col-md-6
                input#password(type='password', class="form-control", :class="{'is-invalid': errors.password}", name='password', required='')
                span.invalid-feedback(v-if="errors.password")
                  strong {{ errors.password }}
            .form-group.row
              label.col-md-4.col-form-label.text-md-right(for='password-confirm') {{ __('Confirm Password') }}
              .col-md-6
                input#password-confirm.form-control(type='password', name='password_confirmation', required='')
            .form-group.row.mb-0
              .col-md-6.offset-md-4
                button.btn.btn-primary(type='submit')
                  | {{ __('Register') }}
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
  props: ['client'],

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
      errors: {},
      name: '',
      email: ''
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
    this.$root.client = this.client
    console.log(this.$options.__file)
  }
}
</script>
