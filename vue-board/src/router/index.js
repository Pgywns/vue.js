import { createRouter, createWebHistory } from "vue-router";
import PostList from "../components/PostList.vue";
import PostForm from "../components/PostForm.vue";
import PostDetail from "../components/PostDetail.vue";

const routes = [
  { path: "/", name: "List", component: PostList }, // 게시글 목록
  { path: "/new", name: "New", component: PostForm }, // 글 작성
  {
    path: "/post/:id",
    name: "Detail",
    component: PostDetail,
    props: true, // 라우터 파라미터를 컴포넌트의 props로 전달
  },
];

export default createRouter({
  history: createWebHistory(), // 실제 브라우저 주소처럼 작동하게 만듦
  routes,
});
