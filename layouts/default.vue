<template>
  <div :class="$colorMode.preference">
    <div class="layout">
      <Header />
      <main class="main-content">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.layout {
  @apply min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-one dark:text-dark-one;
}

.main-content {
  @apply flex-1 container mx-auto px-4 py-8;
}
</style>
