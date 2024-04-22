<script setup>
const peopleStore = usePeopleStore()
const { people } = storeToRefs(peopleStore)

const selectedCountry = ref('')
const countries = people.value.reduce((a, d) => {
  if (!a.includes(d.country)) {
    a.push(d.country)
  }
  return a
}, [])
const selectedRegion = ref('')
const regions = people.value.reduce((r, d) => {
  if (!r.includes(d.region)) {
    r.push(d.region)
  }
  return r
}, [])

const filtered = ref(people.value)
const filteredData = (country, region, search) => {
  if (country || region)
    filtered.value = people.value.filter(
      (c) => c.country === country || c.region === region
    )

  if (searchInput.value)
    filtered.value = people.value.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    )

  return filtered.value
}
const searchInput = ref('')
const find = () => {
  filtered.value = people.value.filter(
    (c) =>
      c.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      c.email.toLowerCase().includes(searchInput.value.toLowerCase())
  )
}
</script>
<template>
  <NuxtLayout>
    <section class="section--left">
      <h3>Filters</h3>
    </section>
    <div class="section">
      <InputSelect
        :name="'Country'"
        :message="'Filter by country'"
        :options="countries"
        v-model="selectedCountry"
      />
      <InputSelect
        :name="'Region'"
        :message="'Filter by region'"
        :options="regions"
        v-model="selectedRegion"
      />
      <InputField :name="'search'" :label="'Search'" v-model="searchInput" />
    </div>

    <Table :data="filteredData(selectedCountry, selectedRegion, searchInput)" />
  </NuxtLayout>
</template>
