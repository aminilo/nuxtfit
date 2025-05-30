<template>
  <section class="about-container">
    <h1 class="page-title">About NuxtFit</h1>
    <p class="intro-text">
      NuxtFit is a modern fashion store built for the purpose of showcasing full-stack development skills using cutting-edge web technologies.
    </p>

    <div class="about-section">
      <h2 class="section-heading">🧩 Tech Stack</h2>
      <ul class="list">
        <li><strong>Nuxt 3</strong> – for SSR, routing, and fast performance</li>
        <li><strong>Tailwind CSS</strong> – for utility-first and elegant styling</li>
        <li><strong>Color Mode</strong> – for Dark/Light mode support to switch the theme</li>
        <li><strong>Nuxt Composables</strong> – for code reuse (like fetching products and managing cart)</li>
        <li><strong>SEO Meta Tags</strong> – for optimized discoverability</li>
        <li><strong>LocalStorage</strong> – for persisting cart data between sessions</li>
        <li><strong>Mock Auth</strong> – for demonstrating user Login/Logout flow (UI only)</li>
      </ul>
    </div>

    <div class="about-section">
      <h2 class="section-heading">📁 Project Highlights</h2>
      <ul class="list">
        <li>Product data fetched from <a href="https://fakestoreapi.com/" target="_blank" class="text-emerald-500 font-bold">FakeStoreAPI</a></li>
        <li>Pagination, category filtering, and product detail pages</li>
        <li>Reusable components and scoped Tailwind with @apply</li>
        <li>Simple cart system with add-to-cart functionality</li>
        <li>Dark/Light mode support using <code class="text-emerald-500">@nuxtjs/color-mode</code></li>
        <li>Cart persistence using browser localStorage</li>
        <li>Login/Logout button with mock auth state</li>
      </ul>
    </div>

    <div class="about-section">
      <h2 class="section-heading">🎯 Goal</h2>
      <p>
        This project is part of my developer portfolio and was created to demonstrate proficiency in <span class="text-emerald-500 font-bold">Nuxt 3</span> and modern frontend practices.
        It reflects strong attention to detail, code cleanliness, and UI consistency.
      </p>
    </div>

    <p class="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400 overline animate-pulse">
      Built with ❤️ and ☕ by an aspiring full-stack developer.
    </p>
  </section>
</template>

<style scoped>
.about-container {
  @apply container mx-auto px-4 py-10 text-light-one dark:text-dark-one text-sm md:text-lg;
}

.page-title {
  @apply text-2xl md:text-3xl font-bold mb-4;
}

.intro-text {
  @apply mb-8;
}

.about-section {
  @apply mb-10;
}

.section-heading {
  @apply text-lg md:text-xl font-bold mb-3;
}

.list {
  @apply list-disc list-inside space-y-2;
}
</style>
