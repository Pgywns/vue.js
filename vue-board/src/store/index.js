import { createStore } from "vuex";

export default createStore({
  // 1. 상태 정의: 이 앱에서 관리할 데이터들
  state: {
    // 게시글 목록
    posts: [
      { id: 1, title: "첫 게시물", content: "안녕하세요!", writer: "PHJ" },
    ],
    nextId: 2, // 새 글에 부여할 고유 ID
  },
  // 2. 뮤테이션: 상태를 "직접" 수정하는 함수 (반드시 동기)
  mutations: {
    ADD_POST(state, post) {
      post.id = state.nextId++; // 글에 고유 id 부여
      state.posts.push(post); // 글 목록에 추가
    },
    DELETE_POST(state, postId) {
      // postId와 다른 게시글만 남김 = 삭제
      state.posts = state.posts.filter((post) => post.id != postId);
    },
  },
  // 3. 액션: 비동기 로직이 필요한 경우 (여기선 단순 위임)
  actions: {
    addPost({ commit }, post) {
      commit("ADD_POST", post); // 내부에서 뮤테이션 호출
    },
    deletePost({ commit }, postId) {
      commit("DELETE_POST", postId);
    },
  },
  // 4. 게터: state 기반으로 가공된 데이터를 컴포넌트에 제공
  getters: {
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => state.posts.find((p) => p.id === id),
  },
});
