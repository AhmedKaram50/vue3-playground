<script setup>
import { ref, watch, watchEffect } from 'vue'

defineProps({
  msg: String,
})

const count = ref(1)
const name = ref("Ahmed")
const data = ref({})

// watch(() => count.value * 5, (oldCount, newCount) => {
//   console.log(newCount)
//   console.log(oldCount)
// })

function useFetch(getUrl) {
  watchEffect(() => {
    fetch(getUrl())
    .then(response => response.json())
    .then(json => data.value = json)
  })
}

useFetch(() => `https://jsonplaceholder.typicode.com/todos/${count.value}`)

</script>

<template>
  <h1>{{ data }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
