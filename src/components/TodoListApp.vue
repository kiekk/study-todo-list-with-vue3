<template>
  <div>
    <TodoInput />
    <TodoList :todo-list="todoStore.getTodoList" />
  </div>
</template>

<script setup>
import TodoList from '@/components/TodoList.vue'
import TodoInput from '@/components/TodoInput.vue'
import { useTodoStore } from '@/store/todo'

const todoStore = useTodoStore()
</script>

<style>
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
}

ul li:hover {
  background: #ddd;
}

ul li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}

ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 1px 1px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

.header {
  background-color: purple;
  padding: 30px 30px;
  color: yellow;
  text-align: center;
}

.header:after {
  content: '';
  display: table;
  clear: both;
}

.input {
  border: none;
  width: 75%;
  height: 35px;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.addButton {
  padding: 10px;
  width: 25%;
  height: 35px;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
}

.addButton:hover {
  background-color: #bbb;
}

.completed {
  text-decoration: none;
}
</style>
