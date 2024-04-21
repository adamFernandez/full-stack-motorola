<script setup>
const { data } = await useFetch("http://localhost:3500/data.json");
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
</script>
<template>
  <!-- <Table :data="people" /> -->
</template>
