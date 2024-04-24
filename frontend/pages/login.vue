<script setup>
const loginFields = ['email', 'password']
const formData = ref({})
const login = async () => {
  await useLogin(formData.value.email, formData.value.password)
    .then((res) => {
      console.log(res),
        localStorage.setItem(
          'auth-token',
          res.data._rawValue.authentication.sessionToken
        )
    })
    .catch((error) => {
      console.log('Error', error)
    })
}
</script>

<template>
  <section class="section--left">
    <h3>Log In</h3>
  </section>
  <form class="form">
    <div class="form__fields">
      <template v-for="f in loginFields">
        <InputField :name="f" :label="capitalize(f)" v-model="formData[f]" />
      </template>
    </div>
    <button type="submit" :class="['button']" @click.prevent="login()">
      Login
    </button>
  </form>
  {{ formData }}
</template>
