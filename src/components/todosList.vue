<template>
  <h1>List todos:</h1>
  <div class="wrapper-todoList">
    <button @click="clearAllTodo" :disabled="Boolean($store.state.editTodo)">Delete all todos</button>
    <ul class="todoList" v-for="item in todoList">
      <li class="todoItem">
        <div class="titleTodo">
          {{ item.title }}
        </div>
        <div class="btnTodo">
          <button @click="editItem(item.id)" :disabled="Boolean($store.state.editTodo)">Edit</button>
          <button @click="deleteItem(item.id)" :disabled="Boolean($store.state.editTodo)">Delete</button>
        </div>
      </li>
      <hr />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clearAllTodo() {
      this.$store.commit("CLEAR_ALL_TODO");
    },
    deleteItem(id) {
      this.$store.commit("DELETE_TODO", id);
    },
    editItem(id) {
      this.$store.commit("EDIT_TODO", id);
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
