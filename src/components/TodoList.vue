<template>
    <div class="todo-list">
        <li class="todo" :class="{ editing : todo === editorTodo,complete: todo.isDone}">
            <div class="read-todo">
                <input type="checkbox" class="checkbox" v-model="isCheck">
                <label @dblclick="isEditTodo(todo)">{{todo.content}}</label>
                <i class="delete" style="cursor: pointer" @click="deleteTodo(todo)">X</i>
            </div>
            <div class="edit-todo">
                <input type="text"
                       :value = "todo.content"
                       v-focus="todo === editorTodo"
                       @blur = "finishEdit"
                       @keyup.enter = "finishEdit"
                       @keyup.esc="cancelEdit(todo)"
                >
            </div>
        </li>
    </div>

</template>
<style lang="scss" scoped>
    input{
        outline: none;
        &:focus{
            border: 1px solid #bf616a;
         }
    }
    .todo-list{

        .editing .edit-todo{
            display: block !important;
        }

        .editing .read-todo{
            display: none !important;
        }
        .complete{
            .read-todo{

                label{
                    text-decoration: line-through;
                    color: #cccccc;
                }
            }
        }
        .todo{
            min-height:60px;

            .read-todo{
                overflow:hidden;
                position:relative;

                .checkbox{
                    display: block;
                    width: 40px;
                    float: left;
                    margin-top: 5px;
                }

                label{
                    float: left;
                    display: block;
                    width: 500px;
                    word-wrap: break-word;
                }
                i{
                    display: block;
                    position: absolute;
                    width: 40px;
                    bottom: 2px;
                    right: 2px;
                }

            }
            .edit-todo{
                display: none;
                width: 520px;
                float: right;
                margin-right:40px;

                & > input{
                        width: 480px;
                        float: left;
                        height: 20px;
                        padding: 5px 10px;
                    }
            }
        }

    }
</style>
<script>
    import { mapActions } from 'vuex'

    export default{
        name:'todo-list',
        props:['todo'],
        data(){
            return {
                editorTodo:'',
                beforeEdit:''
            }
        },
        computed:{
          isCheck:{
              get(){
                  return this.todo.isDone
              },
              set(){
                  var todo = this.todo;
                  this.$store.dispatch('editCheck',{todo})
              }
          }
        },
        methods:{
            ...mapActions([
                "deleteTodo",
                "editTodo"
            ]),
        isEditTodo(todo){
            this.beforeEdit = todo.content;
            this.editorTodo = todo
        },
        finishEdit(e){
            this.editorTodo = '';
            const value = e.target.value.trim();
            const {todo} = this
            this.editTodo({
                todo,
                value
            })
        },
        cancelEdit(todo){
            todo.content = this.beforeEdit;
            this.editorTodo = '';
        }
        },
        directives:{
            "focus":{
                update(el, binding){
                    if (binding.value == true) {
                        el.focus()
                    }
                }
            }
        }


    }
</script>