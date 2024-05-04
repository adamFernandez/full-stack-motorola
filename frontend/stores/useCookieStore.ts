export const useCookieStore = defineStore({
  id: 'cookie-store',
  state: () => {
    return {
      authToken: useCookie('authToken')
    }
  },

  actions: {
    storeAuthToken(token) {
      this.authToken = token
      const newCookie = useCookie('authToken', {
        maxAge: 60 * 24 * 28,
        sameSite: true,
        secure: true
      })
      newCookie.value = this.authToken
    }
  },

  getters: {
    getAuthToken: (state) => {
      return state.authToken
    }
  }
})
