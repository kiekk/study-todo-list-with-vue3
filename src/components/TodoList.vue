<template>
  <ul id="todolist">
    <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" @done-toggle="doneToggle" @delete-todo="deleteTodo"/>
  </ul>
</template>

<script setup>
import TodoListItem from '@/components/TodoListItem.vue'

defineProps({
  todoList: Array
})

const emit = defineEmits(['doneToggle', 'deleteTodo'])

const doneToggle = (id) => {
  emit('doneToggle', id)
}

const deleteTodo = (id) => {
  emit('deleteTodo', id)
}
</script>