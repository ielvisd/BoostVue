import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import BoostVuePlugin from './BoostVuePlugin.ts'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.use(BoostVuePlugin)
// Can initialize like this as well:
// TODO: Add more options that are currently only props
app.use(BoostVuePlugin, { content: 'Hello World' })
app.mount('#app')
