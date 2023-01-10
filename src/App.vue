<script setup lang="ts">
// import BoostVueButton from "./components/boost-vue-button.vue";
const onBoostSuccess = (response) => {
  alert('boostpow success!', response)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h3>hi</h3>
      <boost-vue-button content="ed88eb962c5b204ab409e94e2cbb83168b5fb0a27d1fa7e1e7ec1070b3e9157e" tag="gopnikz"
        :onSuccess="onBoostSuccess" size="sm" round outline class="mt-4">
        <p class="text-xl">🦚</p>
      </boost-vue-button>
    </div>
  </header>
</template>

<style></style>
