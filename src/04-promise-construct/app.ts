function run(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 500) {
        resolve(`run after time ${time}ms`)
      } else {
        reject(` below 500ms is not allowed`)
      }
    }, time)
  })
}

run(700)
  .then(res => console.log(res))
  .then(() => run(1200))
  .then(res => console.log(res))
  .then(() => run(200))
  .then(res => console.log(res))
  .catch(err => console.log(err))

const init = () => {}

export { init }
