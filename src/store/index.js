import { createStore } from "vuex";

const getTodosLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  return todos ?? [];
};

const setTodosLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default createStore({
  state() {
    return {
      todoList: [],
      editTodo: null,
    };
  },

  mutations: {
    SET_TODOSLIST: (state, payload) => {
      state.todoList = payload;
    },

    GET_TODOSLIST_LOCALSTORAGE: (state, payload) => {
      state.todoList = getTodosLocalStorage();
    },

    ADD_TODOS: (state, payload) => {
      state.todoList.push(payload);
      state.editTodo = null;

      setTodosLocalStorage(state.todoList);
    },

    CLEAR_EDITTODO: (state, payload) => {
      state.editTodo = null;
    },

    SAVE_TODO: (state, payload) => {
      let find = state.todoList.find((item) => item.id === payload.id);
      find.title = payload.title;
      state.editTodo = null;
      setTodosLocalStorage(state.todoList);
    },
    EDIT_TODO: (state, payload) => {
      state.editTodo = state.todoList.find((item) => item.id === payload);
    },
    DELETE_TODO: (state, payload) => {
      const isEditTodoRemoved = payload === state.editTodo && state.editTodo.id;
      if (isEditTodoRemoved) {
        state.editTodo = null;
      }
      state.todoList = state.todoList.filter((item) => item.id !== payload);
      setTodosLocalStorage(state.todoList);
    },
    CLEAR_ALL_TODO: (state, payload) => {
      state.todoList = [];
      setTodosLocalStorage(state.todoList);
    },
  },

  actions: {},
});
