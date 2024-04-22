<script setup>
const { data } = defineProps(['data'])
</script>
<template>
  <table>
    <tbody>
      <tr>
        <th>Country</th>
        <th>Region</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="r in data">
        <td v-for="d in r">{{ d }}</td>
      </tr>
    </tbody>
  </table>
</template>
