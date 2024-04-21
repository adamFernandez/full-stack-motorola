<script setup>
const props = defineProps({
  options: Array,
  name: String,
  message: String,
  error: String,
  inputState: String,
});
const modelValue = ref("default");
defineEmits(["update:modelValue"]);
</script>
<template>
  <span class="field">
    <select
      v-model="modelValue"
      :name="name"
      :class="[inputState, 'field__input field__select']"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled selected value="default">{{ message }}</option>
      ]
      <option value="none">None</option>
      <option v-for="(option, i) in options">{{ option }}</option>
    </select>
    <span :class="['error']">{{ error }}</span>
  </span>
</template>
