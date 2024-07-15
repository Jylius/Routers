import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppLink from './components/AppLink.vue'

createApp(App)
.component('AppLink', AppLink)
.use(store)
.use(router)
.mount('#app')
