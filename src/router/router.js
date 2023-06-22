import Home from "../pages/Home.vue";
import TodoList from "../pages/Todos.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/todoList",
    component: TodoList,
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
