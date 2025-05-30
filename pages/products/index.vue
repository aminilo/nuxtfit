<script setup>
const { products, error, loading } = await useProducts();

const selectedCategory = ref('all');
const currentPage = ref(1);
const perPage = 6;

const categories = computed(()=> {
  if( !products.value ) return [];
  const all = products.value.map(p=> p.category);
  return ['all', ...new Set(all)];
})

const filteredProducts = computed(()=> {
  if( !products.value ) return [];
  return selectedCategory.value === 'all'
    ? products.value
    : products.value.filter(p=> p.category === selectedCategory.value);
})

const totalPages = computed(()=> Math.ceil(filteredProducts.value.length / perPage));

const paginatedProducts = computed(()=> {
  const start = (currentPage.value - 1) * perPage;
  return filteredProducts.value.slice(start, start + perPage);
})

function changeCategory(category) {
  selectedCategory.value = category;
  currentPage.value = 1 /* Reset to first page */
}

const { addToCart } = useCart();
const handleAdd = (product)=> {
  const success = addToCart(product);
  if(success) alert(`Added ${product.title} to cart`);
}
</script>

<template>
  <section>
    <h2 class="section-title">Explore Products</h2>

    <div class="mb-6 flex flex-wrap gap-2">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="changeCategory(cat)"
        :class="['category-button', { 'active': selectedCategory === cat }]"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="loading" class="text-center py-8">Loading...</div>
    <div v-else-if="error" class="text-red-500">Failed to load products.</div>
    <div v-else class="product-grid">
      <div v-for="product in paginatedProducts" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <div class="flex flex-col gap-3 mt-auto">
          <NuxtLink :to="`/products/${product.id}`" class="view-button">View Details</NuxtLink>
          <button @click="handleAdd(product)" class="add-button">Add to Cart</button>
        </div>
      </div>
    </div>

    <div v-if="totalPages > 1" class="mt-8 flex justify-center gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="['pagination-button', { 'active': currentPage === page }]"
      >
        {{ page }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  @apply text-2xl font-bold mb-6;
}

.product-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
}

.product-card {
  @apply flex flex-col justify-between border rounded-lg text-center p-4 border border-gray-300 dark:border-gray-600 shadow hover:shadow-lg transition h-full;
}

.product-image {
  @apply w-full h-48 object-contain mb-4;
}

.product-title {
  @apply text-base font-semibold mb-2 line-clamp-2;
}

.product-price {
  @apply text-sm text-gray-700 dark:text-gray-300 mb-3;
}

.view-button {
  @apply mt-auto inline-block px-4 py-2 border border-gray-300 border-b-4 dark:border-gray-600 hover:border-b-2 hover:translate-y-1 bg-dark-one dark:bg-light-one rounded hover:bg-dark-two dark:hover:bg-light-two transition select-none;
}

.add-button {
  @apply px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-zinc-100 rounded hover:opacity-80 transition;
}

.category-button {
  @apply px-4 py-2 border border-gray-300 dark:border-gray-600 rounded text-sm transition hover:bg-dark-two dark:hover:bg-light-two;
}

.category-button.active {
  @apply bg-dark-two dark:bg-light-two;
}

.pagination-button {
  @apply w-8 h-8 text-sm rounded border border-gray-300 dark:border-gray-600 hover:bg-dark-two dark:hover:bg-light-two;
}

.pagination-button.active {
  @apply bg-dark-two dark:bg-light-two;
}
</style>
