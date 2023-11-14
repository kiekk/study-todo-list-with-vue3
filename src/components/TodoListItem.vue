<template>
  <li :class="isDone" @click="doneToggle">
    <span>{{ todo.todo }}</span>
    <span v-if="todo.done"> (완료)</span>
    <span class="close" @click="deleteTodo">&#x00D7;</span>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const { todo } = defineProps({
  todo: Object,
})

const store = useStore()

const isDone = computed(() => {
  return { checked: todo.done }
})

const doneToggle = () => {
  store.dispatch('todo/doneToggle', todo.id)
}

const deleteTodo = () => {
  store.dispatch('todo/deleteTodo', todo.id)
}
</script>
