export default {
  namespaced: true,
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
  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo)
    },
    setTodoList(state, todoList) {
      state.todoList = todoList
    },
    doneToggle(state, index) {
      state.todoList[index].done = !state.todoList[index].done
    },
  },
  actions: {
    addTodo({ getters, commit }, todo) {
      commit('addTodo', {
        id: getters.getTodoList.length + 1,
        todo: todo.trim(),
        done: false,
      })
    },
    deleteTodo({ getters, commit }, id) {
      commit(
        'setTodoList',
        getters.getTodoList.filter((item) => item.id !== id),
      )
    },
    doneToggle({ getters, commit }, id) {
      const index = getters.getTodoList.findIndex((item) => item.id === id)
      commit('doneToggle', index)
    },
  },
}
