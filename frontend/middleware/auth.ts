export default defineNuxtRouteMiddleware((to, from) => {
  if (!localStorage.getItem('auth-token')) {
    return navigateTo('/login')
  }
})
