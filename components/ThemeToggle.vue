<script setup>
const colorMode = useColorMode();
const toggleTheme = ()=> colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
</script>

<template>
  <button @click="toggleTheme" class="toggle-button">🌓</button>
</template>

<style scoped>
.toggle-button {
  @apply border border-dark-two dark:border-dark-soft rounded-full hover:bg-dark-two dark:hover:bg-dark-soft px-3 py-1 cursor-pointer;
}
</style>
