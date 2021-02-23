function runAfter<T>(ms: number, val: T) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val)
    }, ms)
  })
}

const rabbit = runAfter(2000, "🐇")
const turtle = runAfter(6000, "🐢")

const winnerIs = Promise.race([rabbit, turtle])
winnerIs.then(res => {
  console.log(res)
})
