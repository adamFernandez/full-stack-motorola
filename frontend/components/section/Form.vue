<script setup>
defineProps(['fields', 'buttonLabel'])
const peopleStore = usePeopleStore()
const formData = ref({})
const resetForm = () => {
  formData.value = {}
}
const cap = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`
}
</script>
<template>
  <form class="form">
    <div class="form__fields">
      <template v-for="f in fields">
        <InputField :name="f" :label="cap(f)" v-model="formData[f]" />
      </template>
    </div>
    <button
      type="submit"
      :class="['button']"
      @click.prevent="peopleStore.addPerson(formData), resetForm()"
    >
      {{ buttonLabel }}
    </button>
  </form>
</template>
