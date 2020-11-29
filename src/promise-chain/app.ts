import axios from "axios"
const URL = "https://jsonplaceholder.typicode.com"

axios.get(URL + "/todos").then(d => console.log(d.data))
