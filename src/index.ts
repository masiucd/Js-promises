import "./style.css"

function component() {
  const element = document.createElement("div")

  element.innerHTML = ` <h1>hello</h1> `
  element.classList.add("hello")

  return element
}

document.body.appendChild(component())
