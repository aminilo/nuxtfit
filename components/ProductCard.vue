<script setup lang="ts">
defineProps(['product'])

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IRR'
  }).format(price)
}
</script>

<template>
  <div class="rounded-xl overflow-hidden shadow bg-white dark:bg-dark-soft">
    <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover" />
    <div class="p-4">
      <h2 class="text-lg font-bold">{{ product.name }}</h2>
      <p class="text-sm text-light-two dark:text-dark-two mt-1">{{ product.description }}</p>
      <p class="mt-2 font-semibold">{{ formatPrice(product.price) }}</p>
    </div>
  </div>
</template>
