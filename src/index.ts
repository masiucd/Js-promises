import "./style.css"
import { getUsers, render } from "./promise-chain/app"

const createElement = (tag: string): HTMLElement => {
  const element = document.createElement(tag)
  return element
}

function component() {
  const URL = "https://jsonplaceholder.typicode.com"

  const element = createElement("div") as HTMLDivElement

  element.innerHTML = ` <h1>...Loading</h1> `
  render(element, URL)

  return element
}

document.body.appendChild(component())
