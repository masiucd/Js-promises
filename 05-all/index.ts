import nodeFetch from "node-fetch"

const getData = (endPoint: string) => {
  return nodeFetch(`https://jsonplaceholder.typicode.com${endPoint}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      console.log(err)
    })
}

const waitForAll = (): Promise<any> =>
  Promise.all([getData("/todos"), getData("/users"), getData("/albums")]).then(r => {
    const [todos, users, albums] = r
    console.log("we have ", todos.length, " todos")
    console.log("we have ", users.length, " users")
    console.log("we have ", albums.length, " albums")
    return [todos, users, albums]
  })

export { waitForAll }
