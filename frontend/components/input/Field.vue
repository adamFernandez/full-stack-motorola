<template>
  <span class="field">
    <input
      :value="modelValue"
      :type="type"
      :name="name"
      :placeholder="label"
      :required="required"
      :class="['field__input', inputState]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="field__label" :for="name"
      >{{ label }}<span v-if="required">*</span></label
    >
    <span class="field__error">{{ error }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  name: String,
  label: String,
  required: Boolean,
  modelValue: String,
  error: String,
  inputState: String,
  type: String
})
defineEmits(['update:modelValue'])
</script>
