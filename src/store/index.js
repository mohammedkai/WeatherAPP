import Vue from 'vue'
import Vuex from 'vuex'
import weatherModule from './modules/weatherModule'
process.env.VUE_APP_VERSION = require('../../package.json').version || '0.0.0';

Vue.use(Vuex)

// mapper to actions with no payload
function getAction (actionName) {
  return actionName
}

export default new Vuex.Store({
  state: {
    appVersion: process.env.VUE_APP_VERSION
  },
  modules: {
    weatherModule
  },
  mutations: {},
  actions: {
    dispatchAction ({ dispatch }, payload) {
      debugger;
      if (typeof payload === 'string') {
        return dispatch(getAction(payload))
      }
      const { actionName } = payload
      if (!actionName) {
        throw new Error(
          'dispatchAction payload must have an actionName property'
        )
      }
      const newPayload = JSON.parse(JSON.stringify(payload.data))
      return dispatch(getAction(actionName), newPayload)
    }
  },
  getters: {
    appVersion: state => state.appVersion
  }
})
