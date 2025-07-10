<template>
  <div class="container form-container">
    <h2>새 게시글 등록</h2>
    <form @submit.prevent="submit">
      <input v-model="title" placeholder="제목" />
      <input v-model="writer" placeholder="작성자" />
      <textarea v-model="content" placeholder="내용"></textarea>
      <button>등록</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      writer: "",
    };
  },
  methods: {
    submit() {
      // 폼 제출 시 입력값을 부모(App.vue)에게 전달
      this.$emit("create", {
        title: this.title,
        content: this.content,
        writer: this.writer,
      });

      // 입력값 초기화
      this.title = "";
      this.content = "";
      this.writer = "";

      // 작성 후 목록 페이지로 이동
      this.$router.push("/");
    },
  },
};
</script>
