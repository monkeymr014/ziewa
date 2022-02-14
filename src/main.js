import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)

new Vue({
    router,
    store,
    render: (h) => h(App),
    mounted() {
        AOS.init()
    },
}).$mount('#app')