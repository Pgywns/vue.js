<template>
  <div>
    <h2>🧺 장바구니</h2>
    <ul>
      <li v-if="cart.length === 0">장바구니가 비었습니다.</li>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.quantity }}개 ({{
          item.price * item.quantity
        }}원)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  inject: ["cart"],
};
</script>
