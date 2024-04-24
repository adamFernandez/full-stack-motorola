export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('authToken')
  if (!authToken) {
    navigateTo('/login')
  }
})
