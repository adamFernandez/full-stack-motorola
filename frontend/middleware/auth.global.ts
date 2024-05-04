export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('authToken')
  if (authToken.value === undefined && to.path === '/') {
    return navigateTo('/login')
  }
})
