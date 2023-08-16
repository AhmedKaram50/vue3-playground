<script setup>
import { useTodoList } from './stores/TodoList';

const store = useTodoList();

store.$onAction(({ name, store, args, after, onError }, state) => {
  console.log(`(${name}) method called with (${args.join('-')}) arguments`)
}) 
</script>

<template>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
