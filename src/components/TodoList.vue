<script setup>
import { ref } from "vue";
// Store
import { useTodoList } from "../stores/TodoList";
import { storeToRefs } from "pinia";

const store = useTodoList();
const { todoList, test, test2 } = storeToRefs(store)

const item = ref("");

const submitItem = () => {
  store.addTodo(item.value);
};

const changeTest = () => {
    store.$patch({
        test: 'Updated Test',
        test2: 'Updated Test 22',
    })
}
</script>

<template>
  <div class="holder">
    {{ test }} - {{ test2 }}
    <form @submit.prevent="submitItem">
      <input type="text" v-model="item" />
      <button type="submit">Add Todo</button>
    </form>
    <button @click="changeTest">Change Test</button>

    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <p>{{ todo.id }} : {{ todo.item }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.holder {
  max-width: 800px;
  margin: 0 auto;
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
