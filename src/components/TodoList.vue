<template>
  <ul id="todolist">
    <li v-for="todo in todoList" :key="todo.id">
      <span>{{ todo.todo }}</span>
      <span v-if="todo.done"> (완료)</span>
      <span class="close">&#x00D7;</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  todoList: Array
})
</script>