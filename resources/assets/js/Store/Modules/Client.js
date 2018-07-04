// import { Client } from '@/Http/API'
// import Vue from 'vue'

const client = document.head
  .querySelector(
    'meta[name="app-client"]'
) && client.content

/**
 * The Client module State.
 * ------------------------------
 * @const state {Object}
 */
const state = {

  /**
   * The current Client
   * plataform.
   * ------------------------------
   * @member current {Object|null}
    */
  current: JSON.parse(client),

  /**
   * All the Clients
   * loaded on the plataform.
   * ------------------------------
   * @member all {Object}
  */
  all: {},

  /**
   * The array of Clients id's.
   * ------------------------------
   * @member {array}
   */
  list: [],

  /**
   * The selected Client.
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
 * The actions of the Client
 * module State.
 * ------------------------------
 * @const {Object}
 */
const actions = {

  /**
   * Load all the client Entities
   * from the server.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
  getClients ({ dispatch }) {
    clients.all(['attributes.options', 'category']).then(({ data }) => {
      dispatch('loadEntities', data)
    }).catch(err => console.error(err))
  },
   */

  /**
   * The actions of the Client
   * module State.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
   * @param ids {Array} The clients ids to delete.
  filterClients ({ dispatch }, { category, attributes }) {
    return new Promise((resolve, reject) => {
      // console.debug('ATTRIBUTES', attributes)
      clients.filter(category, attributes).then(({ data }) => {
        // console.debug('SEARCH DONE FILTER:', data)
        dispatch('loadEntities', data)
        // dispatch('clientResults', data.map(p => p.id))
        resolve(data)
      }).catch(err => console.error(err))
    })
  },
   */

  /**
   * The actions of the Client
   * module State.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
   * @param ids {Array} The clients ids to delete.
  deleteClients ({ dispatch }, ids) {
    clients.deleteMany(ids).then(({ data }) => {
      dispatch('removeEntities', ids.map(id => ({id: id, _entity: 'Client'})))
    }).catch(err => console.error(err))
  },
   */

  /**
   * Save the client entity on the server.
   * ------------------------------
   * @function
   * @param dispatch {Object} The commit dispatcher.
  saveClient ({ dispatch }, client) {
    return new Promise((resolve, reject) => {
      clients[client.id ? 'update' : 'store'](client).then(({ data }) => {
        dispatch('loadEntities', data)
        resolve(data)
      }).catch(err => reject(err))
    })
  }
   */
}

/**
 * The mutations of the Client
 * module State.
 * ------------------------------
 * @const mutations {Object}
 */
const mutations = {
}

/**
 * The mutations of the Client
 * module State.
 * ------------------------------
 * @const mutations {Object}
 */
const getters = {

  /**
   * Return the current current.
   * ------------------------------
   * @member {Function}
   * @param {Object} state
   * @return {Object} current
   */
  $client (state) {
    return state.current
  },

  /**
   * Return the current client
   * selected from the [All] object.
   * ------------------------------
   * @member {Function}
   * @param {Object} state
   * @return {Object} state
   */
  client (state) {
    return state.all[state.selected]
  },

  /**
   * Return the current id  of the
   * client selected.
   * ------------------------------
   * @member {Function}
   * @param {Object} state
   * @return {int} state
   */
  client_id (state) {
    return state.selected && state.selected.id
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
