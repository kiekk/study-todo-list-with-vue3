<template>
  <div>
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
    <TodoList :todo-list="todoList" @done-toggle="doneToggle"/>
  </div>
</template>

<script setup>
import TodoList from '@/components/TodoList.vue'
import { reactive } from 'vue'

let todo = reactive('')
const todoList = reactive([
  { id: 1, todo: '영화보기', done: false },
  { id: 2, todo: '산책하기', done: true },
  { id: 3, todo: '저녁먹기', done: false },
  { id: 4, todo: '개발공부하기', done: true },
  { id: 4, todo: '블로그작성하기', done: true }
])

const addTodo = () => {
  // 입력값 검증
  if (todo.trim() === '' || todo.trim() === null) {
    alert('할 일을 입력해주세요.')
    return false
  }

  todoList.push({
    id: todoList.length + 1,
    todo: todo.trim(),
    done: false
  })

  todo = ''
}

const doneToggle = (id) => {
  const findTodo = todoList.find((todo) => todo.id === id)
  findTodo.done = !findTodo.done
}
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