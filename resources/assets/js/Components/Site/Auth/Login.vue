<template lang="pug">
.container-fliud.login
  //- .row.justify-content-center
    .col-md-8
      .card
        .card-header {{ __('Login') }}
        .card-body
          form(@submit.stop.prevent="loginAttempt")
            //- | @csrf
            //- pre {{ errors }}
            .form-group.row
              label.col-sm-4.col-form-label.text-md-right(for='email') {{ __('E-Mail Address') }}
              .col-md-6
                input#email(type='email'
                  :class="{'is-invalid': errors.email}",
                  class="form-control",
                	name='email',
                	v-model="email",
                	required='',
                	autofocus=''
                )
                span.invalid-feedback(v-if="errors.email")
                  strong(v-for="error in errors.email") {{ error }}
            .form-group.row
              label.col-md-4.col-form-label.text-md-right(for='password') {{ __('Password') }}
              .col-md-6
                input#password(
                  :class="{'is-invalid': errors.password}"
                	class="form-control",
                	type='password',
                	name='password',
                  v-model="password",
                	required=''
                )
                span.invalid-feedback(v-if="errors.password")
                  strong(v-for="error in errors.password") {{ error }}
            .form-group.row
              .col-md-6.offset-md-4
                .checkbox
                  label
                    input(type='checkbox', name='remember')
                    | {{ __('Remember Me') }}
            .form-group.row.mb-0
              .col-md-8.offset-md-4
                button.btn.btn-primary(type='submit')
                  | {{ __('Login') }}
                a.btn.btn-link(href="/password/request")
                  | {{ __('Forgot Your Password?') }}
  .row.justify-content-center
    .col-md-6.col-lg-5.col-sm-8
      .card.card-corner
        .card-header
          //- img(src="/images/login2.jpg")
        .card-body
          .card-body-rotate
          form(@submit.stop.prevent="loginAttempt")
            //- | @csrf
            //- pre {{ errors }}
            .form-group.row
              label.col-sm-4.col-form-label.text-md-right(for='email') {{ __('E-Mail Address') }}
              .col-md-6
                input#email(type='email'
                  :class="{'is-invalid': errors.email}",
                  class="form-control",
                  name='email',
                  v-model="email",
                  required='',
                  autofocus=''
                )
                span.invalid-feedback(v-if="errors.email")
                  strong(v-for="error in errors.email") {{ error }}
            .form-group.row
              label.col-md-4.col-form-label.text-md-right(for='password') {{ __('Password') }}
              .col-md-6
                input#password(
                  :class="{'is-invalid': errors.password}"
                  class="form-control",
                  type='password',
                  name='password',
                  v-model="password",
                  required=''
                )
                span.invalid-feedback(v-if="errors.password")
                  strong(v-for="error in errors.password") {{ error }}
            .form-group.row
              .col-md-6.offset-md-4
                .checkbox
                  label
                    input(type='checkbox', name='remember')
                    | {{ __('Remember Me') }}
            .form-group.row.mb-0
              .col-md-8.offset-md-4
                button.btn.btn-t(type='submit')
                  | {{ __('Login') }}
                a.btn.btn-link(href="/password/request")
                  | {{ __('Forgot Your Password?') }}                  
</template>

<script>
import axios from 'axios'

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
      email: 'christa14@example.com',
      password: 'secret',
      message: ''
    }
  },

  /**
   * The main instance methods of
   * the component.
   * ------------------------------
   * @member {Object} methods
   */
  methods: {
    loginAttempt () {
      // axios.defaults.headers.common['Accept'] = 'application/json'// Content-Type: application/json
      // axios.defaults.headers.common['Accept'] = 'text/html,application/xhtml+xml,application/xmlq=0.9,image/webp,*/*q=0.8'
      // axios.defaults.baseURL = '/'
      axios.post(`/login`, this.$data).then(({ data }) => {
        this.$root.setUser(data)
        this.$go('dashboard')
      }).catch(err => {
        console.log(err)
        let response = err.response
        this.errors = response.data.errors
        this.message = response.data.message
      })
    }
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
