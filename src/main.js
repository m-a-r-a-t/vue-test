import 'jquery'
import 'popper.js'
import bootstrap from 'bootstrap'

// import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './main.scss'
import { createApp } from 'vue'
import App from './App.js'
import router from './router'
import store from './store'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App).use(router).use(store).mount('#app')
