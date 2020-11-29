import axios from "axios"

const getUsers = (URL: string, endPoint: string) => {
  const response = axios
    .get(URL + endPoint)
    .then(res => res.data)
    .catch(err => err) as Promise<Array<any>>
  return response
}

const render = async (element: HTMLDivElement, URL: string) => {
  const users = await getUsers(URL, "/users")
  const output = users.map(user => ` <p>${user.name}</p>`).join("")
  element.innerHTML = output
}

export { getUsers, render }
