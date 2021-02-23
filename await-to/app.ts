const decoder = new TextDecoder()
type AwaitTo<T, U = Error> = [U, undefined] | [null, T]

export const to = <T, U = Error>(
  promise: Promise<T>,
  errorExt?: Record<string, string | number>
): Promise<AwaitTo<T, U>> => {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt)
      }

      return [err, undefined]
    })
}

const readFile = async (file: string) => {
  const [err, f] = await to(Deno.readFile(file))

  if (err) {
    throw new Error("Oops no file found of name " + file)
  }
  return f
}

readFile("./d.json").then(r => console.log(decoder.decode(r)))
