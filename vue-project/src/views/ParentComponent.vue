<template>
  <div class="todo-app">
    <h2>📋 나의 투두리스트</h2>

    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="할 일을 입력하세요"
    />
    <button @click="addTodo">추가</button>

    <ul>
      <ChildComponent
        v-for="(todo, index) in todos"
        :key="index"
        :text="todo"
        :index="index"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  name: "ParentComponent",
  components: { ChildComponent },
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo == "") {
        alert("입력해주세요");
        return;
      }
      const trimmed = this.newTodo.trim();
      if (trimmed) {
        this.todos.push(trimmed);
        this.newTodo = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 40px auto;
  font-family: "Segoe UI", sans-serif;
  text-align: center;
}

input {
  padding: 8px;
  width: 60%;
  font-size: 14px;
  margin-right: 10px;
}

button {
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
</style>
