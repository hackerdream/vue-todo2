export const STORAGE_KEY = 'todos';

export const mutations={
  addTodo(state,{content}){

    state.todos.push({
        content,
        isDone:false
    })
  },
  deleteTodo(state,{todo}){
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  editTodo(state,{todo,value}){
    todo.content = value
  },
  editCheck(state,{todo}){
    todo.isDone = ! todo.isDone
  }
};