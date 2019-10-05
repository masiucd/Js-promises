<template>
  <div id="app">
    <Header title="Vuejs" />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todoList" v-on:delete-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

export default {
  name: "app",
  components: {
    Todos,
    Header,
    AddTodo
  },
  methods: {
    deleteTodo(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      this.todoList = [...this.todoList, todo];
    }
  },
  data() {
    return {
      todoList: [
        {
          id: "sadadas",
          text: "Go out with the dog",
          completed: true
        },
        {
          id: "sadada2321312s",
          text: "Go to the gym",
          completed: false
        },
        {
          id: "sa2131dad231as",
          text: "go for a run",
          completed: false
        }
      ]
    };
  }
};
</script>




<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background: #666;
}

.btn:hover {
  background: #666;
}
</style>
