import { luke, spinner } from "../helpers/get-data"

export const init = () => {
  ;(document.getElementById(
    "root"
  ) as HTMLDivElement).innerHTML = `<div class="spinner">${spinner}</div>`
  luke((r: Record<string, any>) => {
    renderPerson(r)
  })
    .catch(err => {
      console.error(err)
      ;(document.getElementById("root") as HTMLDivElement).innerHTML = ":("
    })
    .finally(() => {
      ;(document.querySelector(".spinner") as HTMLDivElement).remove()
    })

  function renderPerson(person: Record<string, any>) {
    ;(document.getElementById("root") as HTMLDivElement).innerHTML = `
      <div>
        <p>
          name: ${person.name}
        </p>
        <p>
          birth year: ${person.birth_year}
        </p>
        <p>
          height: ${person.height}
        </p>
        <p class="planet">
         ${fetch(person.homeworld).then(r => r.json().then(r => renderWorld(r)))}
        </p>
      </div>
    `
  }

  function renderWorld(planet: Record<string, any>) {
    ;(document.querySelector(
      ".planet"
    ) as HTMLElement).innerHTML = ` <p> Home planet ${planet.name} </p> `
  }
}
