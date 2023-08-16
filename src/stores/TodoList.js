import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodoList = defineStore("TodoList", {
  state: () => ({
    todoList: [],
    id: 0,
    test: "test is here",
    test2: "test 2 is here",
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item: item, completed: false, id: this.id++ });
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
  },
  getters: {
    doneTodos: (state) => state.todoList.filter(todo => todo.completed)
  },
  persist: true,
});


// export const useTodoList = defineStore("TodoList", () => {
//   // States
//   const todoList = ref([])
//   const id = ref(0)
//   const test = ref("Test is here")
//   const test2 = ref("Test2 is here")

//   // Actions
//   function addTodo(item) {
//     todoList.value.push({ item: item, completed: false, id: id.value++ });
//   }
//   function removeTodo(itemId) {
//     todoList.value = todoList.value.filter(todo => todo.id !== itemId);
//   }

//   // Getters
//   const doneTodos = computed(() => todoList.value.filter(todo => todo.completed))

//   return {
//     addTodo,
//     removeTodo,
//     todoList,
//     id,
//     test,
//     test2,
//   }
// })
