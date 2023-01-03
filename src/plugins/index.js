/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import axios from 'axios'
import vueAxios from 'vue-axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(vueAxios, axios)
}
