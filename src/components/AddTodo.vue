<template>
  <div>
    <form @submit="addTodo">
      <input type="text" placeholder="enter a todo" v-model="title" name="title" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import uuid from "uuid/v4";

export default {
  name: "Add Todo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: uuid(),
        text: this.title,
        completed: false
      };
      //send to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 80%;
  margin: 0 auto;
}
input {
  border: 1px solid #333;
  padding: 0.4rem 0.8rem;
  margin: 0.3rem 0;
  font-size: 18px;
  box-shadow: 2px 2px 3px #222;
}

button {
  padding: 0.3rem 0.2rem;
  width: 15rem;
  border: 1px solid #333;
  box-shadow: 2px 2px 3px #222;
  font-size: 16px;
  font-weight: 600;
  margin: 0.3rem 0;
  transition: all 300ms ease-in-out;
}
button:hover {
  box-shadow: 2px 3px 3px 3px #222;
  cursor: pointer;
  background: #333;
  margin: 0.4rem 0;
  color: #eee;
}
</style>