<template>
  <header>
    <h1>Vue JS Todo List</h1>
    <h3>{{title}}</h3>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["title"]
};
</script>

<style>
header {
  background: rgba(3, 3, 3, 0.4);
  color: #eee;
  text-align: center;
  padding: 1.2rem;
}
</style>