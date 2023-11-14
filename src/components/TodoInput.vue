<template>
  <div id="header" class="header">
    <h2>Todo List App</h2>
    <input
      v-model="todo"
      type="text"
      class="input"
      id="task"
      placeholder="입력 후 엔터"
      @keyup.enter="addTodo"
    />
    <span class="addButton" @click="addTodo">추가</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/store/todo'

const todo = ref('')
const todoStore = useTodoStore()

const addTodo = () => {
  // 입력값 검증
  if (todo.value.trim() === '' || todo.value.trim() === null) {
    alert('할 일을 입력해주세요.')
    return false
  }

  todoStore.addTodo(todo.value.trim())
  todo.value = ''
}
</script>
