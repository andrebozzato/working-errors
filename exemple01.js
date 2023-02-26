// use 'then'
async function getUserInfo1(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

// using 'async / await'
async function getUserInfo2(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const data = await response.json()
  console.log(data)
}

// using 'async / await' with 'try / catch
async function getUserInfo3(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error(err)
  }
}
// const userData = await getUserInfo3(1)
// console.log(userData)

async function getUserInfo() {
  const users = await Promise.all([
    await getUserInfo3(1),
    await getUserInfo3(2),
    await getUserInfo3(2),
  ])
  console.log(users)
}

getUserInfo()
