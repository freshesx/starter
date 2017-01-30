import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import store from './index'
import message from 'vue-human/util/message'

export default function (config) {
  axios.interceptors.response.use(
  response => {
    // Return successful
    return response
  }, error => {
    if (error.response.status >= 500) {
      message({ show: true, type: 'error', description: '服务器出了一点故障，请稍后重试' })
    }
    if (error.response.status === 401) {
      message({ show: true, type: 'error', description: '帐户已注销，请重新登录' })
      router.push({ name: 'sign-in' })
    }
    if (error.response.status === 403) {
      message({ show: true, type: 'error', description: '您没有权限操作该功能' })
    }
    return Promise.reject(error)
  })

  return axios({
    ...{
      baseURL: Vue.env.get('API'),
      headers: {
        Accept: 'application/json',
        // If you need using oAuth
        // Authorization: `${store.state.user.token.token_type} ${store.state.user.token.access_token}`
      }
    },
    ...config
  })
}
