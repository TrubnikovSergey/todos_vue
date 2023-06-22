<template>
  <div v-if="Boolean($store.state.editTodo)">
    <form @submit.prevent>
      <input :value="$store.state.editTodo.title" @input="inputTitle" type="text" />
      <button @click="save">Save</button>
    </form>
  </div>
  <div v-else>
    <form @submit.prevent>
      <input v-model="todoTitle" type="text" />
      <button @click="add">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    editTodo: {
      type: Object,
    },
  },
  data() {
    return { todoTitle: "" };
  },
  methods: {
    inputTitle(e) {
      this.todoTitle = e.target.value;
    },
    save() {
      // const isTodoExist = this.store.state.todoList.find((item) => item.id === this.$store.state.editTodo.id);
      // console.log("isTodoExist", isTodoExist);
      // if (isTodoExist) {
      //   this.$store.commit("SAVE_TODO", { id: this.$store.state.editTodo.id, title: this.todoTitle });
      // } else {
      //   this.$store.commit("CLEAR_EDITTODO");
      // }
      this.$store.commit("SAVE_TODO", { id: this.$store.state.editTodo.id, title: this.todoTitle });
      this.todoTitle = "";
    },
    add() {
      if (this.todoTitle) {
        this.$store.commit("ADD_TODOS", { id: Date.now().toString(), title: this.todoTitle });
        this.todoTitle = "";
      }
    },
  },
};
</script>
<style>
form {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  gap: 10px;
}
</style>
