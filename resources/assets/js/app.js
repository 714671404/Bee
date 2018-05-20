require('es6-promise').polyfill()

import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import App from '~/components/App'

import '~/components'

Vue.config.productionTip = true

new Vue({
    store,
    router,
    ...App
})