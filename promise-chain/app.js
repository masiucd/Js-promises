const getData = async () => {
  const res = await fetch("http://localhost:5000/posts")
  const data = await res.json()
  console.log(data)
}
getData()
