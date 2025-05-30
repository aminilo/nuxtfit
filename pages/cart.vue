<script setup>
const { cartItems, removeFromCart, cartTotal } = useCart()
</script>

<template>
  <section class="cart-container">
    <h2 class="cart-title">🛒 Your Cart 🛒</h2>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is currently empty.</p>
      <NuxtLink to="/products" class="go-shop-button">Go Shopping</NuxtLink>
    </div>

    <div v-else>
      <div class="cart-grid">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="item-image" />
          <div class="item-info">
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-price">Unit: ${{ item.price.toFixed(2) }}</p>
            <p class="item-quantity">Qty: {{ item.quantity }}</p>
            <p class="item-subtotal">Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}</p>
            <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <h2 class="summary-title">Cart Total</h2>
        <p class="total-amount">${{ cartTotal.toFixed(2) }}</p>
        <button class="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart-container {
  @apply container mx-auto px-4 py-10 text-light-one dark:text-dark-one text-center;
}

.cart-title {
  @apply text-3xl font-bold mb-8;
}

.empty-cart {
  @apply text-center text-lg;
}

.go-shop-button {
  @apply inline-block mt-4 px-4 py-2 bg-emerald-500 text-zinc-100 rounded hover:opacity-80 transition;
}

.cart-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10;
}

.cart-item {
  @apply flex flex-col justify-between border border-gray-300 dark:border-gray-600 rounded p-4 shadow hover:shadow-lg;
}

.item-image {
  @apply w-full h-48 object-contain mb-4;
}

.item-info {
  @apply flex flex-col gap-1;
}

.item-title {
  @apply text-lg font-semibold line-clamp-2;
}

.item-price,
.item-quantity,
.item-subtotal {
  @apply text-sm text-gray-700 dark:text-gray-300;
}

.remove-button {
  @apply mt-2 px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition;
}

.cart-summary {
  @apply max-w-md mx-auto p-6 border border-gray-300 dark:border-gray-600 rounded text-center;
}

.summary-title {
  @apply text-xl font-bold mb-2;
}

.total-amount {
  @apply text-2xl font-bold mb-4;
}

.checkout-button {
  @apply px-6 py-3 bg-indigo-600 text-zinc-100 rounded hover:opacity-80 transition;
}
</style>
