<template>
  <div class="navigation">
    <button
      type="submit"
      :class="['button button--small']"
      @click.prevent="navigateTo('/login')"
    >
      Login
    </button>
    <button
      type="submit"
      :class="['button button--small']"
      @click.prevent="navigateTo('/register')"
    >
      Register
    </button>
  </div>
</template>
