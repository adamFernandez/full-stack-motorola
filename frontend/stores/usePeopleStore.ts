import data from '~/public/data.json'

export const usePeopleStore = defineStore({
  id: 'people-store',
  state: () => {
    return {
      people: data
    }
  },

  actions: {
    addPerson(country: string, region: string, name: string, email: string) {
      this.people.push({
        country,
        region,
        name,
        email
      })
    }
  },

  getters: {
    getPeople: (state) => {
      return () => state.people
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePeopleStore, import.meta.hot))
}
