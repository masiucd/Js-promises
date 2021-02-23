import "./style.css"
import { render } from "./03-finally"
import { waitForAll } from "./05-all"

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
  const waitForAllWrapper = createElement("div", "wait-for-all") as HTMLDivElement

  wrapper.innerHTML = ` <h1>...Loading</h1> `
  render(wrapper, URL)

  spinner.appendChild(spinnerBody)

  element.append(spinner, wrapper, waitForAllWrapper)

  waitForAll().then(r => {
    const [todos, users, albums] = r
    waitForAllWrapper.innerHTML = `
      <div class="promise-all">
        <p>
          We have ${todos.length} todos
        </p>
          <p>
            We have ${users.length} users
          </p>
          <p>
            We have ${albums.length} albums
          </p>
      </div>
    `
  })

  return element
}

document.body.appendChild(component())
