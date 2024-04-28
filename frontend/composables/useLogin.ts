export const useLogin = async (email, password) => {
  const config = useRuntimeConfig()
  const cookieStore = useCookieStore
  const { authToken } = storeToRefs(cookieStore)
  console.log(password, email)
  if (!password || !email) {
    return alert('Fill in all the fields')
  }
  const res = await fetch(`${config.public.apiUrl}/auth/login`, {
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
      authToken.storeAuthToken(res.authentication.sessionToken)
      navigateTo('/')
    })
    .catch((error) => {
      console.log('Error:', error)
    })

  return res
}
