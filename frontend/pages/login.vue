<script setup>
const formData = ref({})
const login = async () => {
  await useLogin(formData.value.email, formData.value.password)
}
</script>

<template>
  <div>
    <section class="section--left">
      <h3>Log In</h3>
    </section>
    <form class="form">
      <div class="form__fields">
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
      </div>
      <button type="submit" :class="['button']" @click.prevent="login()">
        Login
      </button>
    </form>
    <div class="container">
      <button
        type="submit"
        :class="['button button--small']"
        @click.prevent="navigateTo('/register')"
      >
        Not registered yet?
      </button>
    </div>
  </div>
</template>
