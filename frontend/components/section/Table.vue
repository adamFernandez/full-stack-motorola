<script setup>
const { data } = defineProps(['data', 'cols'])
</script>
<template>
  <table>
    <tbody>
      <tr>
        <template v-for="c in cols">
          <th>{{ capitalize(c) }}</th>
        </template>
      </tr>
      <tr v-for="r in data">
        <td v-for="d in r">{{ d }}</td>
      </tr>
    </tbody>
  </table>
</template>
