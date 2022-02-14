import { IToDo } from '@/Interfaces/IToDo'

export const state = () => ({
  todos: [{
    id: '0',
    title: '',
    description: '',
    isCompleted: false,
  }] as IToDo[],
  localTodo: {
    id: '0',
    title: '',
    description: '',
    isCompleted: false,
  } as IToDo,
})

export const mutations = {
  setTodos(state: { todos: IToDo[] }, todos: IToDo[]) {
    state.todos = todos
  },
  addTodo(state: { todos: IToDo[] }, todo: IToDo) {
    state.todos.push(todo)
  },
  updateTodo(state: { todos: IToDo[] }, todo: IToDo) {
    const index = state.todos.findIndex(t => t.id === todo.id);
    state.todos[index] = todo;

  },
  deleteTodo(state: { todos: IToDo[] }, id: number) {
    state.todos.splice(id, 1)
  },
  setLocalTodo(state: { localTodo: IToDo }, todo: IToDo) {
    state.localTodo = todo
  },
  setLocalTodoId(state: { localTodo: IToDo }, id: IToDo["id"]) {
    state.localTodo.id = id;
  },
  setLocalTodoTitle(state: { localTodo: IToDo }, title: IToDo["title"]) {
    state.localTodo.title = title;
  },
  setLocalTodoDescription(state: { localTodo: IToDo }, description: IToDo["description"]) {
    state.localTodo.description = description;
  },
  setLocalTodoIsCompleted(state: { localTodo: IToDo }, isCompleted: IToDo["isCompleted"]) {
    state.localTodo.isCompleted = isCompleted;
  },
}

export const actions = {
  setTodos(context: { commit: (arg0: string, arg1: IToDo[]) => void }, payload: IToDo[]) {
    context.commit('setTodos', payload)
  }
}

export const getters = {
  todosList: (state: { todos: IToDo[] }) => state.todos
}
