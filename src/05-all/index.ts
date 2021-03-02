import { deathStar, luke, yavin } from "../helpers/get-data"

const promise = Promise.all([deathStar, yavin, luke])

export const init = () => {
  return { promise }
}
