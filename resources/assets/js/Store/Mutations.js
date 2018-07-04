// import Vue from 'vue'

/**
 * The Mutations related to the Entities.
 * ------------------------------
 * @const mutations {Object}
 */
const mutations = {
  setHttpStatus: function (state, status) {
    state.$HttpStatus = status
  }
}

export default mutations
