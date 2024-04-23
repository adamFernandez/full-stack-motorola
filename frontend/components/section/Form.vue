<script setup>
defineProps(['fields', 'buttonLabel'])
const peopleStore = usePeopleStore()
const formData = ref({})
const resetForm = () => {
  formData.value = {}
}
</script>
<template>
  <form class="form">
    <div class="form__fields">
      <template v-for="f in fields">
        <InputField :name="f" :label="capitalize(f)" v-model="formData[f]" />
      </template>
    </div>
    <button
      v-if="buttonLabel"
      type="submit"
      :class="['button']"
      @click.prevent="peopleStore.addPerson(formData), resetForm()"
    >
      {{ buttonLabel }}
    </button>
  </form>
</template>
