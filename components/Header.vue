<script setup>
const { user, login, logout } = useAuth();
const isSidebarOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="site-title">NuxtFit</h1>

      <button class="hamburger sm:hidden" @click="isSidebarOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

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

    <transition name="slide">
      <div v-if="isSidebarOpen" class="sidebar fixed top-0 right-0 w-64 h-full bg-light-bg dark:bg-dark-bg shadow-lg z-50 p-6">
        <div class="flex items-center justify-between mb-2">
          <button class="close-btn" @click="isSidebarOpen = false">&#10008;</button>
          <ThemeToggle />
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" class="nav-link" @click="isSidebarOpen = false">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="isSidebarOpen = false">About</NuxtLink>
          <NuxtLink to="/products" class="nav-link" @click="isSidebarOpen = false">Products</NuxtLink>
          <NuxtLink to="/cart" class="nav-link" @click="isSidebarOpen = false">🛒 Cart</NuxtLink>
          <span class="nav-link cursor-pointer" @click="user ? logout() : login(); isSidebarOpen = false">
            {{ user ? 'Logout' : 'Login' }}
          </span>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.header {
  @apply bg-light-soft dark:bg-dark-soft border-b border-zinc-400 dark:border-zinc-600 shadow-md sticky top-0 z-50 select-none;
}

.header-inner {
  @apply container mx-auto p-4 flex flex-wrap justify-between items-center gap-2;
}

.site-title {
  @apply text-xl md:text-2xl font-bold text-light-one dark:text-dark-one;
}

.nav-links {
  @apply hidden sm:flex flex-wrap items-center gap-2 sm:gap-4;
}

.nav-link {
  @apply px-3 py-1 border-b border-dark-two dark:border-light-two rounded hover:bg-dark-two dark:hover:bg-light-two;
}

.hamburger {
  @apply text-light-one dark:text-dark-one;
}

.sidebar {
  @apply sm:hidden overflow-y-auto border-l border-dark-soft;
}

.close-btn {
  @apply text-2xl border border-dark-two dark:border-dark-soft rounded-full hover:bg-dark-two dark:hover:bg-dark-soft px-3 py-1 self-end mb-4;
}

/* Sidebar Slide Animation */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
