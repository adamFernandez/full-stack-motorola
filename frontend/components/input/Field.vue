<template>
  <span class="field">
    <input
      :value="modelValue"
      :type="fieldType()"
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
});
defineEmits(["update:modelValue"]);
const fieldName = ref(props.field?.displayName);

const fieldType = () => {
  const type =
    (fieldName.value === "Name" && "text") ||
    (fieldName.value === "SingleLineText" && "text") ||
    (fieldName.value === "Email" && "email") ||
    (fieldName.value === "Number" && "number") ||
    (fieldName.value === "Phone" && "tel");
  return type;
};
</script>
