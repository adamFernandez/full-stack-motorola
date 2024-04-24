<script setup>
const formData = ref({})
const registerUser = async () => {
  await useRegisterUser(
    formData.value.username,
    formData.value.email,
    formData.value.password,
    formData.value.conf_password
  )
}
const resetForm = () => {
  formData.value = {}
}
</script>
<template>
  <div>
    <section class="section--left">
      <h3>Register User</h3>
    </section>
    <form class="form">
      <div class="form__fields">
        <InputField
          :type="'text'"
          :name="'username'"
          :label="'Username'"
          v-model="formData['username']"
        />
        <InputField
          :type="'email'"
          :name="'email'"
          :label="'Email'"
          v-model="formData['email']"
        />
        <InputField
          :type="'password'"
          :name="'password'"
          :label="'Password'"
          v-model="formData['password']"
        />
        <InputField
          :type="'password'"
          :name="'conf_password'"
          :label="'Repeat password'"
          v-model="formData['conf_password']"
        />
      </div>
      <button type="submit" :class="['button']" @click.prevent="registerUser()">
        Register
      </button>
      <button
        type="submit"
        :class="['button button--small']"
        @click.prevent="navigateTo('/login')"
      >
        Go to login
      </button>
    </form>
    {{ formData }}
  </div>
</template>
