import * as types from './mutation-types'

const matutaions = {
  [types.SET_WIFI_STATUS](state, status) {
    state.wifi.status = status
  },
  [types.SET_WIFI_NAME](state, name) {
    state.wifi.name = name
  }
}

export default matutaions
