import Vue from 'vue'
import VueHuman from 'vue-human'
import components from 'vue-human/suits/total'
import './app.scss'

Vue.use(VueHuman)
VueHuman.add(components)

export default VueHuman
