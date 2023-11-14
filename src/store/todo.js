import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { id: 1, todo: '영화보기', done: false },
      { id: 2, todo: '산책하기', done: true },
      { id: 3, todo: '저녁먹기', done: false },
      { id: 4, todo: '개발공부하기', done: true },
      { id: 5, todo: '블로그작성하기', done: true },
    ],
  }),
  getters: {
    getTodoList(state) {
      return state.todoList
    },
  },
  actions: {
    addTodo(todo) {
      this.todoList.push({
        id: this.todoList.length + 1,
        todo: todo.trim(),
        done: false,
      })
    },
    deleteTodo(id) {
      const index = this.todoList.findIndex((item) => item.id === id)
      this.todoList.splice(index, 1)
    },
    doneToggle(id) {
      const index = this.todoList.findIndex((item) => item.id === id)
      this.todoList[index].done = !this.todoList[index].done
    },
  },
})
