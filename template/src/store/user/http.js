import Vue from 'vue'
import env from '../../env'
import axios from 'axios'

export default {

  /**
   * @param {Object} 传递给服务器的参数
   * @return {Promise} Promise
   */
  signIn (params = {}) {
    return axios.post(`${Vue.env.get('API')}/oauth/token`, {
      ...{
        grant_type: 'password',
        client_id: env.get('CLIENT_ID'),
        client_secret: env.get('CLIENT_SECRET')
        // params.username
        // params.password
      },
      ...params
    })
  }

}
