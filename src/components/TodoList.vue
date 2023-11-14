<template>
  <ul id="todolist">
    <li v-for="todo in todoList" :key="todo.id" :class="isDone(todo.done)"
    @click="$emit('doneToggle', todo.id)">
      <span>{{ todo.todo }}</span>
      <span v-if="todo.done"> (완료)</span>
      <span class="close">&#x00D7;</span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  todoList: Array
})

const isDone = computed(() => (done) => {
  return { checked: done }
})
</script>