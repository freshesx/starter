import http from './http'
import {
  UPDATE_AUTH_TOKEN,
  CLEAR_AUTH_TOKEN } from '../mutation-types'

const namespace = 'user'

export default {
  [`${namespace}.signIn`] ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      http.signIn({ username, password })
        .then(response => {
          commit(UPDATE_AUTH_TOKEN, response.data)
          resolve(response)
        })
        .catch(response => { reject(response) })
    })
  },
  [`${namespace}.signOut`] ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(CLEAR_AUTH_TOKEN)
      resolve()
    })
  }
}
