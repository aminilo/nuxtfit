<script setup>
const { data: product, error, pending } = await useFetch(`https://fakestoreapi.com/products/${useRoute().params.id}`)
</script>

<template>
  <section>
    <div v-if="pending" class="text-center py-12">Loading...</div>
    <div v-else-if="error" class="text-red-500">Product not found.</div>

    <div v-else class="product-detail">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">${{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-category">Category: {{ product.category }}</p>

        <NuxtLink to="/" class="back-button">← Back to Shop</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-detail {
  @apply max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6;
}
.product-image {
  @apply w-full h-80 object-contain bg-white rounded shadow;
}
.product-info {
  @apply space-y-4;
}
.product-title {
  @apply text-2xl font-bold;
}
.product-price {
  @apply text-xl text-green-600 dark:text-green-400;
}
.product-description {
  @apply text-gray-700 dark:text-gray-300;
}
.product-category {
  @apply text-sm italic text-gray-500 dark:text-gray-400;
}
.back-button {
  @apply inline-block mt-6 p-1 text-blue-600 dark:text-blue-400 hover:underline;
}
</style>
