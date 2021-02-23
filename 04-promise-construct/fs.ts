import * as fs from "fs"

function readFile(path: string, encoding: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, value) => {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  })
}

readFile(__filename, "utf8").then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)

readFile("text.txt", "utf8").then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
