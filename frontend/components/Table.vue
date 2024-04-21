<script setup>
const { data } = defineProps(["data"]);
</script>
<template>
  <table>
    <tr>
      <th>Country</th>
      <th>Region</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
    <tr v-for="r in data">
      <td v-for="d in r">{{ d }}</td>
    </tr>
  </table>
</template>
<style lang="scss">
td,
th {
  padding: 0.4em 0;
  text-align: left;
  border-bottom: 1px solid;
}
</style>
