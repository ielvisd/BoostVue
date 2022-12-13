// uno.config.js
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    // ...
    transformers: [
        transformerDirectives(),
    ],
})