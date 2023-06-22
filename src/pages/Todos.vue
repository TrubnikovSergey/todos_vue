<template>
  <div class="wrapper">
    <div class="container">
      <RouterLink to="/">Go home</RouterLink>
      <CreateTodo :edit-todo="$store.state.editTodo" />
      <TodosList :todoList="$store.state.todoList" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import CreateTodo from "../components/createTodo.vue";
import TodosList from "../components/todosList.vue";

export default {
  components: { CreateTodo, TodosList, RouterLink },
  mounted() {
    this.$store.commit("GET_TODOSLIST_LOCALSTORAGE");
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.wrapper-todoList {
  width: 100%;
}

.todoList {
  margin: 15px 0px;
  padding: 0px 0px;
}

.todoItem {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.btnTodo {
  display: flex;
  gap: 5px;
}

.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
