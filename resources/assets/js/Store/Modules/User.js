// import { User } from '@/Http/API'
// import Vue from 'vue'

const user = document.head
  .querySelector(
    'meta[name="app-user"]'
) && user.content

/**
 * The User module State.
 * ------------------------------
 * @const state {Object}
 */
const state = {

  /**
   * The current User
   * logged on the plataform.
   * ------------------------------
   * @member me {Object|null}
    */
  me: JSON.parse(user),

  /**
   * All the Users
   * loaded on the plataform.
   * ------------------------------
   * @member all {Object}
  */
  all: {},

  /**
   * The array of Users id's.
   * ------------------------------
   * @member {array}
   */
  list: [],

  /**
   * The selected User.
   * ------------------------------
   * @member {int}
   */
  selected: null,

  /**
   * The array of id's of the
   * results search.
   * ------------------------------
   * @member {array}
   */
  results: []
}

/**
 * The actions of the User
 * module State.
 * ------------------------------
 * @const {Object}
 */
const actions = {

  /**
   * Load all the user Entities
   * from the server.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
  getUsers ({ dispatch }) {
    users.all(['attributes.options', 'category']).then(({ data }) => {
      dispatch('loadEntities', data)
    }).catch(err => console.error(err))
  },
   */

  /**
   * The actions of the User
   * module State.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
   * @param ids {Array} The users ids to delete.
  filterUsers ({ dispatch }, { category, attributes }) {
    return new Promise((resolve, reject) => {
      // console.debug('ATTRIBUTES', attributes)
      users.filter(category, attributes).then(({ data }) => {
        // console.debug('SEARCH DONE FILTER:', data)
        dispatch('loadEntities', data)
        // dispatch('userResults', data.map(p => p.id))
        resolve(data)
      }).catch(err => console.error(err))
    })
  },
   */

  /**
   * The actions of the User
   * module State.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
   * @param ids {Array} The users ids to delete.
  deleteUsers ({ dispatch }, ids) {
    users.deleteMany(ids).then(({ data }) => {
      dispatch('removeEntities', ids.map(id => ({id: id, _entity: 'User'})))
    }).catch(err => console.error(err))
  },
   */

  /**
   * Save the user entity on the server.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
  saveUser ({ dispatch }, user) {
    return new Promise((resolve, reject) => {
      users[user.id ? 'update' : 'store'](user).then(({ data }) => {
        dispatch('loadEntities', data)
        resolve(data)
      }).catch(err => reject(err))
    })
  }
   */
}

/**
 * The mutations of the User
 * module State.
 * ------------------------------
 * @const mutations {Object}
 */
const mutations = {
}

/**
 * The mutations of the User
 * module State.
 * ------------------------------
 * @const mutations {Object}
 */
const getters = {

  /**
   * Return the current logged user.
   * ------------------------------
   * @member {Function}
   * @param {Object} state
   * @return {Object} me
   */
  $me (state) {
    return state.me
  },

  /**
   * Return the current user
   * selected from the [All] object.
   * ------------------------------
   * @member {Function}
   * @param {Object} state
   * @return {Object} state
   */
  $user (state) {
    return state.all[state.selected]
  },

  /**
   * Return the current id  of the
   * user selected.
   * ------------------------------
   * @member {Function}
   * @param {Object} state
   * @return {int} state
   */
  $user_id (state) {
    return state.selected && state.selected.id
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
