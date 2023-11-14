<template>
  <ul id="todolist">
    <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script setup>
import TodoListItem from '@/components/TodoListItem.vue'

defineProps({
  todoList: Array,
})
</script>
