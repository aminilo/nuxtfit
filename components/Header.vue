<script setup>
const { user, login, logout } = useAuth();
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="site-title">NuxtFit</h1>
      <nav class="nav-links">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/products" class="nav-link">Products</NuxtLink>
        <NuxtLink to="/cart" class="nav-link">🛒 Cart</NuxtLink>
        <span class="nav-link cursor-pointer" @click="user ? logout() : login()">
          {{ user ? 'Logout' : 'Login' }}
        </span>
        <ThemeToggle />
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply bg-light-soft dark:bg-dark-soft border-b border-zinc-400 dark:border-zinc-600 shadow-md sticky top-0 z-50 select-none;
}

.header-inner {
  @apply container mx-auto px-4 py-4 flex justify-between items-center;
}

.site-title {
  @apply text-xl md:text-2xl font-bold text-light-one dark:text-dark-one;
}

.nav-links {
  @apply flex items-center gap-4;
}

.nav-link {
  @apply px-3 py-1 border-b border-dark-two dark:border-light-two rounded hover:bg-dark-two dark:hover:bg-light-two;
}
</style>
