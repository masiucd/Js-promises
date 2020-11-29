import "./style.css"
import { render } from "./03-finally"

const createElement = (tag: string, className: string): HTMLElement => {
  const element = document.createElement(tag)
  element.classList.add(className)
  return element
}

function component() {
  const URL = "https://jsonplaceholder.typicode.com"

  const spinner = createElement("div", "spinner") as HTMLDivElement
  const spinnerBody = createElement("div", "spinner-body") as HTMLDivElement
  const element = createElement("div", "main") as HTMLDivElement
  const wrapper = createElement("div", "wrapper") as HTMLDivElement

  wrapper.innerHTML = ` <h1>...Loading</h1> `
  render(wrapper, URL)

  spinner.appendChild(spinnerBody)

  element.append(spinner, wrapper)

  return element
}

document.body.appendChild(component())
