import Vue from 'vue'
import VueHumanEnv from 'vue-human-env'
import defaultConfig from './config.js'
const envConfig = require(`./config.${process.BROWSER_ENV}.js`).default

Vue.use(VueHumanEnv, defaultConfig, envConfig)

export default VueHumanEnv
