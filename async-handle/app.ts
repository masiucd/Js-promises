interface SureThingResponse<T> {
  ok: boolean
  data?: T
  err?: Error
}

const sureThing = <T>(p: Promise<T>): Promise<SureThingResponse<T>> =>
  p.then(data => ({ ok: true, data })).catch(err => ({ ok: false, err }))

const readFile = async (file: string) => {
  const { ok, data, err } = await sureThing(Deno.readFile(file))
  if (ok) {
    console.log(ok)
    console.log(data)
    return data
  }
  if (err) {
    throw new Error(err.message)
  }
}

readFile("./d.json").then(r => {
  const json = decoder.decode(r)
  console.log(json)
})
