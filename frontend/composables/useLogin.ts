export const useLogin = async (password, email, token) => {
  console.log(password, email)
  if (!password || !email) {
    return alert('Fill in all the fields')
  }
  const response = await useFetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })

  return response
}
