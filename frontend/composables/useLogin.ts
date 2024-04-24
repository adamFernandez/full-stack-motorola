export const useLogin = async (email, password) => {
  console.log(password, email)
  if (!password || !email) {
    return alert('Fill in all the fields')
  }
  const res = await $fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((res) => {
      console.log('Success! ')
      console.log('Response: ', res)
      localStorage.setItem('auth-token', res.authentication.sessionToken)
      navigateTo('/')
    })
    .catch((error) => {
      console.log('Error:', error)
    })

  return res
}
