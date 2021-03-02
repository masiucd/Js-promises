import "./styles/main.scss"
import { init } from "./05-all"
;(() => {
  const { promise } = init()
  promise.then(([planetFn, spaceShipFn, personFn]) => {
    planetFn((r: any) => console.log(r))
    spaceShipFn((r: any) => console.log(r))
    personFn((r: any) => console.log(r))
  })
})()
