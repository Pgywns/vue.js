<template>
  <h1>Hello, {{ msg }}</h1>
  <h1 v-text="msg"></h1>
  <h2 v-html="htmlStr"></h2>

  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model.number="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">대전</option>
      <option value="052">부산</option>
    </select>
  </p>

  <p>
    <label>{{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
    />
  </p>

  <p>
    <input type="radio" />
  </p>

  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}, {{ checking }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "World!!!",
      htmlStr: '<span style="color: red;">Red Text</span>',
      valueModel: "홍길동",
      numberModel: 10,
      city: "042",
      checking: "yes",
    };
  },
};
</script>

<!-- 범위 지정 -->
<style scoped>
h1 {
  color: green;
}
</style>
