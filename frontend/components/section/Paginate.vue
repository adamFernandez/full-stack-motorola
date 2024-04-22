<script setup>
const props = defineProps(['data', 'total', 'current', 'increment'])
const to = ref(props.increment)

const current = ref(props.current)
const total = ref(props.total)
const totalPages = ref(total.value / props.increment)
const selectedPage = ref(1)
// const next = () => {
//   current.value = current.value + to.value
//   to.value = to.value + console.log(current.value)
// }
</script>
<template>
  total: {{ total }} current: {{ current }} totalPages:
  {{ totalPages }} selectedPage: {{ selectedPage }}
  <div class="form__fields">
    <button
      :class="['button button--small', selectedPage === 1 ? 'disabled' : '']"
      :disabled="selectedPage === 1 ? true : false"
      @click.prevent="
        () => {
          ;(current = current - increment),
            (to = to - increment),
            selectedPage--
        }
      "
    >
      Prev
    </button>

    <ol class="section section--counter">
      <li
        v-for="(p, i) in totalPages"
        :class="i + 1 === selectedPage ? 'selected-page' : ''"
      >
        {{ (p, i + 1) }}
      </li>
    </ol>
    <button
      :class="[
        'button button--small',
        selectedPage === totalPages ? 'disabled' : ''
      ]"
      :disabled="selectedPage === totalPages ? true : false"
      @click.prevent="
        () => {
          ;(current = current + increment),
            (to = to + increment),
            selectedPage++
        }
      "
    >
      Next
    </button>
  </div>
  <h3>Showing from {{ current }} to {{ to }} (page{{ selectedPage }})</h3>
  <SectionTable
    :data="data.filter((p, index) => index < to && index >= current)"
  />
</template>
