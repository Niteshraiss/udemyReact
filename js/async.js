
fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res) => res.json())
    .then((data) => console.log(data))
console.log("hom without await")

async function getTodo() {
   const res= await fetch('https://jsonplaceholder.typicode.com/todos/')
   const data= await res.json()
    console.log(data)
    console.log("await")
}
getTodo()