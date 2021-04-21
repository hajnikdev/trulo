import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global styles import
import './assets/css/trulo.css'

createApp(App).use(router).mount('#app')
