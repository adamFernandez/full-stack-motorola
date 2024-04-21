<script setup>
const { data } = await useFetch("http://localhost:3500/data.json");
const selectedCountry = ref("");
const countries = data.value.reduce((a, d) => {
  if (!a.includes(d.country)) {
    a.push(d.country);
  }
  return a;
}, []);
const selectedRegion = ref("");
const regions = data.value.reduce((r, d) => {
  if (!r.includes(d.region)) {
    r.push(d.region);
  }
  return r;
}, []);

const filtered = ref(data.value);
const filteredData = (country, region, search) => {
  if (country || region)
    filtered.value = data.value.filter(
      (c) => c.country === country || c.region === region
    );

  if (searchInput.value)
    filtered.value = data.value.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    );

  return filtered.value;
};
const searchInput = ref("");
const find = () => {
  filtered.value = data.value.filter(
    (c) =>
      c.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      c.email.toLowerCase().includes(searchInput.value.toLowerCase())
  );
};
</script>
<template>
  <div class="container">
    <div class="section">
      <h3 class="heading">Filters:</h3>
      <div class="inline">
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
      </div>
    </div>
  </div>
  <InputField :name="'search'" :label="'Search'" v-model="searchInput" />

  <Table :data="filteredData(selectedCountry, selectedRegion, searchInput)" />
</template>
