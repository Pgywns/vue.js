<template>
  <div>
    <h2>📦 상품 목록</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}원
        <button @click="addToCart(product)">담기</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  inject: ["addToCart"],
  data() {
    return {
      products: [
        { id: 1, name: "사과", price: 1000 },
        { id: 2, name: "바나나", price: 1500 },
        { id: 3, name: "딸기", price: 2000 },
      ],
    };
  },
};
</script>
