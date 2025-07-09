<template>
  <li class="todo-item">
    {{ text }}
    <button @click="deleteItem">삭제</button>
  </li>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    text: String,
    index: Number,
  },
  methods: {
    deleteItem() {
      this.$emit("delete-todo", this.index);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #ff5e57;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
