export const useRegisterUser = async (
  username,
  email,
  password,
  password_check
) => {
  if (!username || !password || !password_check || !email) {
    return alert('Fill in all the fields')
  }
  if (password !== password_check) {
    return alert('Passwords do not match')
  }
  const res = await fetch('http://localhost:8080/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  })
    .then((res) => {
      console.log(res)
      console.log('Successful!')
    })
    .catch((error) => {
      console.log('Some error')
      console.log('Error', error)
    })
}
