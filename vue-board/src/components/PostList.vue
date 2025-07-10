<template>
  <div class="container list-container">
    <h1>게시글 목록</h1>
    <button @click="$router.push('/new')">새 글 작성</button>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <!-- 상세 페이지 링크 생성 -->
        <router-link :to="{ name: 'Detail', params: { id: post.id } }">
          {{ post.id }}. {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // vuex에서 모든 게시글 가져오기
    // vuex의 getter를 통해 항상 최신의 게시글 목록을 가져올 수 있음
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    },
  },
};
</script>
