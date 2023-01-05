<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <BoostButton content="ed88eb962c5b204ab409e94e2cbb83168b5fb0a27d1fa7e1e7ec1070b3e9157e" tag="gopnikz"
      :onSuccess="onBoostSuccess" size="sm" round outline class="mt-4 mx-auto">
      <p class="text-xl">🦚</p>
    </BoostButton>
    <TheFooter />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Home Layout]
    </div>
  </main>
</template>


<script lang="ts" setup>
const onBoostSuccess = (response: any) => {
  alert('boostpow success!')
  console.log(response)
}
</script>
