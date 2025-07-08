<template>
  <h3>List 랜더링</h3>
  <div v-if="productList.length == 0">
    <span>** No Data **</span>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- 반복하기 위해서 중복되지 않는 key값이 필요 (배열에서 인덱스 값은 중복이 없기 때문에 인덱스로 설정) -->
        <tr v-bind:key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
          <td><button v-on:click="delFnc">삭제</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p><label>제품명</label><input type="text" v-model="name" /></p>
  <!---->
  <p><label>가격</label><input type="number" v-model.number="price" /></p>
  <!---->
  <p><label>카테고리</label><input type="text" v-model="category" /></p>
  <!---->
  <p><label>배송료</label><input type="number" v-model.number="delivery" /></p>
  <!---->
  <span><button v-on:click="addFnc">등록</button></span>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 25000,
          category: "노트북/태블릿",
          delivery_price: 3000,
        },
        {
          product_name: "무선마우스",
          price: 15000,
          category: "노트북/태블릿",
          delivery_price: 3000,
        },
        {
          product_name: "태블릿거치대",
          price: 35000,
          category: "노트북/태블릿",
          delivery_price: 3000,
        },
      ],
      name: "",
      price: "",
      category: "",
      delivery: "",
    };
  },
  methods: {
    addFnc() {
      console.log(this);
      this.productList.push({
        product_name: this.name,
        price: this.price,
        category: this.category,
        delivery_price: this.delivery,
      });
    },
    delFnc() {
      event.target.parentElement.parentElement.remove();
    },
  },
  // mounted() {
  //   this.productList = [];
  // },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
