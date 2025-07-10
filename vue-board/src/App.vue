<template>
  <div id="app">
    <!-- router-view는 현재 URL에 해당하는 컴포넌트를 표시 -->
    <router-view @create="onCreate" />
  </div>
</template>

<script>
export default {
  methods: {
    onCreate(post) {
      // PostForm에서 emit된 create 이벤트 처리
      this.$store.dispatch("addPost", post);
    },
  },
};
</script>
