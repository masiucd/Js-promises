import axios from "axios"
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(d => d.json())
  .then(d => console.log(d))
