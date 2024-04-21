<script setup>
const { data: people } = await useFetch("http://localhost:3500/data.json");
</script>
<template>
  <Table :data="people" />
</template>
s
