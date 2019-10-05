<template>
  <div class="todo">
    <div class="todoWrapper">
      <input type="checkbox" v-on:change="checked" />
      <h3 v-bind:class="{'completed':todo.completed}">{{todo.text}}</h3>
      <span class="delete" @click="$emit('delete-todo', todo.id)">❌</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    checked() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo {
  padding: 1rem 1.5rem;
  background: #eee;
  border-bottom: 2px solid #333;
  margin: 1rem 0;
  display: flex;
}
.todoWrapper {
  display: flex;
  align-items: center;

  width: 100%;
  justify-content: center;
}

input[type="checkbox"] {
  margin: 0 1rem;
}

.completed {
  text-decoration: line-through 3px #fe3234;
}

.delete {
  margin-left: auto;
  cursor: pointer;
}
</style>