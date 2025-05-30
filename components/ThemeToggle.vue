<script setup>
const colorMode = useColorMode();
const toggleTheme = ()=> colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
</script>

<template>
  <button @click="toggleTheme" class="toggle-button">🌓</button>
</template>

<style scoped>
.toggle-button {
  @apply border border-zinc-300 dark:border-zinc-600 rounded px-3 py-1 cursor-pointer hover:bg-light-two dark:hover:bg-dark-two;
}
</style>
