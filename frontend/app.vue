<script setup>
const people = await useFetch("http://localhost:3500/data.json");
</script>
<template>
  <div>
    {{ people }}
  </div>
</template>
