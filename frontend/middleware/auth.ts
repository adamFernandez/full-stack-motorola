export default defineNuxtRouteMiddleware((to, from) => {
  if (!localStorage.getItem('auth-token') && to == '/') {
    return navigateTo('/login')
  }
})
