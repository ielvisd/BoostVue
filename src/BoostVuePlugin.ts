import type { App } from 'vue'
import BoostVue from './components/BoostVueButton.vue'

export default {
  install: (app: App, options: { content: string }) => {
    app.component('BoostVue', BoostVue)
    app.provide('content', options?.content)
  },
}

export { BoostVue }

