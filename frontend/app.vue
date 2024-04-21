<script setup>
const { data } = await useFetch("http://localhost:3500/data.json");
const selectedCountry = ref("");
const countries = data.value.reduce((a, d) => {
  if (!a.includes(d.country)) {
    a.push(d.country);
  }
  return a;
}, []);
const regions = data.value.reduce((r, d) => {
  if (!r.includes(d.region)) {
    r.push(d.region);
  }
  return r;
}, []);

const filteredData = (country, region) => {
  const filtered =
    country || region
      ? data.value.filter((c) => c.country === country || c.region === region)
      : data.value;
  return filtered;
};
</script>
<template>
  <div class="section">
    <InputSelect
      :name="'Country'"
      :message="'Filter by country'"
      :options="countries"
      v-model="selectedCountry"
    />
    <Table :data="filteredData(selectedCountry)" />
  </div>
</template>
