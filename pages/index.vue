<template>
  <section class="home">
    <div class="hero">
      <h2 class="hero-title">Welcome to NuxtFit</h2>
      <p class="hero-subtitle">Discover modern fashion and accessories tailored for your style.</p>
      <NuxtLink to="/products" class="shop-button">Start Shopping</NuxtLink>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3 class="feature-title">Trendy Wear</h3>
        <p class="feature-text">Latest styles for men and women.</p>
      </div>
      <div class="feature-card">
        <h3 class="feature-title">Secure Cart</h3>
        <p class="feature-text">Easy add-to-cart experience.</p>
      </div>
      <div class="feature-card">
        <h3 class="feature-title">Powered by Nuxt</h3>
        <p class="feature-text">Built with modern web technologies.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  @apply px-4 py-12;
}

.hero {
  @apply text-center max-w-2xl mx-auto mb-12;
}

.hero-title {
  @apply text-2xl md:text-4xl font-bold mb-4;
}

.hero-subtitle {
  @apply text-lg text-light-two dark:text-dark-two mb-6;
}

.shop-button {
  @apply inline-block text-zinc-100 px-5 py-3 bg-emerald-500 dark:bg-emerald-600 rounded hover:opacity-80 transition;
}

.features {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6;
}

.feature-card {
  @apply text-center p-4 border border-gray-300 dark:border-gray-600 rounded shadow hover:shadow-lg hover:-translate-y-1 transition;
}

.feature-title {
  @apply text-xl font-bold mb-2;
}

.feature-text {
  @apply text-sm text-light-two dark:text-dark-two;
}
</style>
