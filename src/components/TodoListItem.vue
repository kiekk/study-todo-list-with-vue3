<template>
  <li :class="isDone" @click="doneToggle">
    <span>{{ todo.todo }}</span>
    <span v-if="todo.done"> (완료)</span>
    <span class="close" @click="deleteTodo">&#x00D7;</span>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const { todo } = defineProps({
  todo: Object
})

const emit = defineEmits(['doneToggle', 'deleteTodo'])

const isDone = computed(() => {
  return { checked: todo.done }
})

const doneToggle = () => {
  emit('doneToggle', todo.id)
}

const deleteTodo = () => {
  emit('deleteTodo', todo.id)
}
</script>