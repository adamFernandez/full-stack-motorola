<script setup>
defineProps(['heading'])
</script>
<template>
  <div class="header">
    <div class="logo">
      <NuxtLink to="/">
        <h2>
          {{ heading }}
        </h2>
      </NuxtLink>
    </div>
    <LayoutNavigation />
  </div>
</template>
