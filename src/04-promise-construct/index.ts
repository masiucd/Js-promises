function run(amount: number) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      if (amount >= 500) {
        resolved("run after  " + amount + " ms")
      } else if (amount < 500) {
        reject("promise got rejected because it can't handle ms under 500 ms")
      }
    }, amount)
  })
}

run(650)
  .then(res => {
    console.log(res)
  })
  .then(() => run(900))
  .then(r => console.log(r))
  .then(() => run(790))
  .then(r => console.log(r))
  .then(() => run(300))
  .catch(r => console.log(r))

// Please don't do this Christmas tree in your production code
// this is just a example code
run(700)
  .then(res => {
    console.log(res)
    run(600)
      .then(res => {
        console.log(res)
        run(1200)
          .then(res => {
            console.log("res", res)
            run(300)
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })
