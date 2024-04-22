<script setup>
const peopleStore = usePeopleStore()
const formData = ref({})
const resetForm = () => {
  formData.value = {}
}
</script>
<template>
  <form class="form">
    <div class="form__fields">
      <InputField
        :name="'country'"
        :label="'Country'"
        v-model="formData['country']"
      />
      <InputField
        :name="'region'"
        :label="'Region'"
        v-model="formData['region']"
      />
      <InputField :name="'name'" :label="'Name'" v-model="formData['name']" />
      <InputField
        :name="'email'"
        :label="'Email'"
        v-model="formData['email']"
      />
    </div>
    <button
      type="submit"
      :class="['button']"
      @click.prevent="peopleStore.addPerson(formData), resetForm()"
    >
      Add Person
    </button>
  </form>
</template>
