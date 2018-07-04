import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/Store/Actions'
import mutations from '@/Store/Mutations'
import getters from '@/Store/Getters'
import state from '@/Store/State'
import User from '@/Store/Modules/User'
import Client from '@/Store/Modules/Client'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    User,
    Client
  }
})
