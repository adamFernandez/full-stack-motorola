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

const filteredData = (country, region) => {
  let filtered = data.value;
  if (country || region)
    filtered = data.value.filter(
      (c) => c.country === country || c.region === region
    );

  return filtered;
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
    <div class="section">
      <Table :data="filteredData(selectedCountry, selectedRegion)" />
    </div>
  </div>
</template>
<style lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  justify-content: center;
  justify-items: center;
  gap: 1em;
  width: 100%;
  .section {
    width: 80%;
  }
}
</style>
