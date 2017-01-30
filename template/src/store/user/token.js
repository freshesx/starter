import Vue from 'vue'
import moment from 'moment'

const TOKEN_NAME = `${Vue.env.get('STORAGE_PREFIX')}TOKEN`

export default {
  get () {
    const token = window.JSON.parse(window.localStorage.getItem(TOKEN_NAME))
    const expires = moment(token ? token.expires : undefined)
    const now = moment()

    return expires > now && token ? token : this.remove()
  },
  set (token) {
    const expires = moment().add(31536000, 's').format()
    window.localStorage.setItem(TOKEN_NAME, window.JSON.stringify({ ...token, expires }))
    return this.get()
  },
  remove () {
    window.localStorage.removeItem(TOKEN_NAME)
    return {}
  }
}
