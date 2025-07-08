<template>
  <h3>Show Vue</h3>

  <div>
    <button @click="ifVisible">v-if 테스트</button>
    <p v-if="ifVis">v-if는 요소 자체를 제거합니다.</p>
  </div>

  <div>
    <button @click="showVisible">v-show 테스트</button>
    <p v-show="showVis">v-show는 display속성을 none으로 변경합니다.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifVis: true,
      showVis: true,
    };
  },
  methods: {
    ifVisible() {
      this.ifVis = !this.ifVis;
    },
    showVisible() {
      this.showVis = !this.showVis;
    },
  },
};
</script>

<style scoped>
div p {
  margin: 0 auto;
  margin-top: 5px;
  width: 500px;
  border: 1px solid;
}
div button {
  margin-top: 20px;
}
</style>
