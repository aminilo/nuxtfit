<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} NuxtFit. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-light-soft dark:bg-dark-soft text-sm text-center border-t border-zinc-400 dark:border-zinc-600 py-6;
}
</style>
