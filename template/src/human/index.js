import Vue from 'vue'
import Human from 'vue-human'
import locales from '../locale'
import scrollerSuits from 'vue-human/components/scroller'
import sectionSuits from 'vue-human/components/section'
import columnSuits from 'vue-human/components/column'
import letterSuits from 'vue-human/components/letter'
import cardSuits from 'vue-human/components/card'
import buttonSuits from 'vue-human/components/button'
import formSuits from 'vue-human/components/form'
import labelSuits from 'vue-human/components/label'
import inputSuits from 'vue-human/components/input'
import helperSuits from 'vue-human/components/helper'
import './app.scss'

// Use Human
Vue.use(Human, { locales })

Vue.use(scrollerSuits)
Vue.use(sectionSuits)
Vue.use(columnSuits)
Vue.use(letterSuits)
Vue.use(cardSuits)
Vue.use(buttonSuits)
Vue.use(formSuits)
Vue.use(labelSuits)
Vue.use(inputSuits)
Vue.use(helperSuits)
