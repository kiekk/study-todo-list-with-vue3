<template>
  <li :class="isDone" @click.capture="doneToggle">
    <span>{{ todo.todo }}</span>
    <span v-if="todo.done"> (완료)</span>
    <span class="close" @click="deleteTodo">&#x00D7;</span>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoStore } from '@/store/todo'

const { todo } = defineProps({
  todo: Object,
})

const todoStore = useTodoStore()

const isDone = computed(() => {
  return { checked: todo.done }
})

const doneToggle = () => {
  todoStore.doneToggle(todo.id)
}

const deleteTodo = () => {
  todoStore.deleteTodo(todo.id)
}
</script>
