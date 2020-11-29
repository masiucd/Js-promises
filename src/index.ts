import "./style.css"

function component() {
  const element = document.createElement("div")

  element.innerHTML = ` <h1>hello</h1> `
  element.classList.add("hello")

  const x = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      console.log(users)
      console.log(users.length)
    })

  console.log(x)
  console.log("x", x)

  return element
}

document.body.appendChild(component())
