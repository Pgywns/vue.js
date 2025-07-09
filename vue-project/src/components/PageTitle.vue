<template>
  <slot name="header"></slot>
  <h3>PageTitle</h3>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
  <p v-bind:class="{ 'red-font': isOk }">환영합니다</p>
  <ul>
    <li v-bind:key="i" v-for="(member, i) in members">
      이름: {{ member.name }}, 나이: {{ member.age }}
    </li>
  </ul>
  <slot name="footer"></slot>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  props: {
    title: { type: String, default: "페이지 제목" },
    likes: { type: Number, default: 0 },
    isOk: { type: Boolean, default: false },
    members: {
      type: Array,
      default: function () {
        return [{ name: "삼촌", age: 33 }];
      },
    },
  },
};
</script>

<style scoped>
.red-font {
  color: red;
}
</style>
