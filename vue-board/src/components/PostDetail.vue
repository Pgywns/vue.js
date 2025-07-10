<template>
  <div class="container detail-container" v-if="post">
    <h2>게시글 상세</h2>
    <h3>{{ post.title }}</h3>
    <p>{{ post.writer }}</p>
    <p>{{ post.content }}</p>
    <button @click="$router.push('/')">뒤로가기</button>
    <!-- 삭제 버튼 추가 -->
    <button class="delete-btn" @click="deletePostHandler">삭제하기</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // 라우터는 URL에 포함된 파라미터를 props로 넘길 수 있음
  // 이렇게 하면 this.$route 대신 props만으로 데이터를 처리 가능
  props: ["id"], // 라우터에서 넘어온 게시글 id
  computed: {
    ...mapGetters(["getPostById"]),
    post() {
      return this.getPostById(Number(this.id)); // id로 게시글 찾기
    },
  },
  methods: {
    ...mapActions(["deletePost"]),
    deletePostHandler() {
      if (confirm("정말 삭제하시겠습니까?")) {
        this.deletePost(this.post.id);
        this.$router.push("/"); // 삭제 후 목록으로 이동
      }
    },
  },
};
</script>
