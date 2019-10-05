<template>
  <div>
    <div class="todos" v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
      <!-- v-on:delete-todo , we are catching our emmit event from the todoItem -->
      <!-- and we emiting it again to tha parent component -->
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style scoped>
</style>