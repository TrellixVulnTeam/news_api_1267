<template>
  <div class="bg-gray-100 p-5">
    <NuxtLink to="/">Homeへ</NuxtLink>
    <h1 class="text-lg">Vuexの練習ページです</h1>
    <input @keyup.enter="addTodo" placeholder="タスクを追加する" class="shadow border rounded appearance-none mt-4 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <p>{{ todo.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>