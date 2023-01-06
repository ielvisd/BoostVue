<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

function onBoostSuccess(response): any {
  alert('boostpow success!')
  console.log('response in onBoostSuccess is: ', response)
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <BoostVue
      content="ed88eb962c5b204ab409e94e2cbb83168b5fb0a27d1fa7e1e7ec1070b3e9157e" tag="gopnikz"
      :on-success="onBoostSuccess" size="sm" round outline class="mt-4 mx-auto"
    >
      <p class="text-xl">
        🦚
      </p>
    </BoostVue>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
