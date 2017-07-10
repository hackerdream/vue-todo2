export const actions = {
    addTodo({commit},content){
        commit('addTodo',content);
    },
    deleteTodo({commit},todo){
        commit('deleteTodo',{todo:todo});
    },
    editTodo({commit},{todo,value}){
        commit('editTodo',{todo,value});
    },
    editCheck({commit},{todo}){
        commit('editCheck',{todo})
    }
}