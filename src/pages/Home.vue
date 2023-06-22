<template>
  <div class="wrapper-home">
    <div class="container-home">
      <RouterLink to="/todoList">Go to list todos</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
};
</script>

<style>
.wrapper-home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-home {
  font-size: 24px;
}
</style>
