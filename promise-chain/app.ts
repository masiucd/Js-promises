const getData = async () => {
  const res = await fetch("/posts")
  const data = await res.json()
  console.log(data)
}

getData()
