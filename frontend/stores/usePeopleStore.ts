import data from '~/public/data.json'

export const usePeopleStore = defineStore({
  id: 'people-store',
  state: () => {
    return {
      people: data
    }
  },

  actions: {
    addPerson(person: object) {
      this.people = [
        {
          country: person.country,
          region: person.region,
          name: person.name,
          email: person.email
        },
        ...this.people
      ]
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
