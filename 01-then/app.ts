const getApiUrl = () => {
  return "https://swapi.dev/api/"
}

const getData = (url: string) => (endPoint: string) => (fn: Function) => {
  return fetch(url + endPoint)
    .then(res => res.json())
    .then(data => fn(data))
}

const starWarsApi = getData(getApiUrl())
const luke = starWarsApi("people/1")

let x = luke((r: any) => console.log(r))

// console.log(x)

// // import axios from "axios"

// const getUsers = (URL: string, endPoint: string) => {
//   const response = axios.get(URL + endPoint).then(res => res.data) as Promise<Array<any>>
//   return response
// }

// const render = async (element: HTMLDivElement, URL: string) => {
//   const users = await getUsers(URL, "/users")
//   const output = users.map(user => ` <p>${user.name}</p>`).join("")
//   element.innerHTML = output
// }

// export { getUsers, render }
