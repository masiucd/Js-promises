import axios from "axios"

const getApiUrl = () => {
  return "https://swapi.dev/api/"
}

export const getData = (url: string) => (endPoint: string) => (fn: Function) => {
  return axios
    .get(url + endPoint)
    .then(res => res.data)
    .then(data => fn(data))
}

const starWarsApi = getData(getApiUrl())

export const luke = starWarsApi("people/1")
export const yavin = starWarsApi("planets/3/")
export const deathStar = starWarsApi("starships/9/")

export const lukesHomeWorld = (endPoint: string) => starWarsApi(endPoint)

export const spinner = `...loading`
