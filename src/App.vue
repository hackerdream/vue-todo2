<template v-cloak>
    <div id="app">

        <header class="title">
            <strong>计划表：</strong>
        </header>
        <section>
            <div class="write-todo">
                <input type="text"
                       autofocus
                       autocomplete="off"
                       @keyup.enter="addTodo">
            </div>
            <div class="todos-states">
                <ul>
                    <li :class="{checked : 'unfinished' == visibility }">
                        <a href="#unfinished">unfinished</a>
                    </li>
                    <li :class="{checked : 'finished' == visibility }">
                        <a href="#finished">finished</a>
                    </li>
                    <li :class="{checked : 'all' == visibility }">
                        <a href="#all">all</a>
                    </li>
                </ul>
            </div>
            <div class="todo-list-box">
                <ul class="todos-list">
                    <todo-list  v-for="todo in filterList"  :todo = 'todo'></todo-list>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import TodoList from './components/TodoList.vue'

    const filters = {
        all: todos => todos,
        unfinished: todos => todos.filter(todo => !todo.isDone),
        finished: todos => todos.filter(todo => todo.isDone)
    }

    export default {
        name: 'app',
        data(){
            return {
                vue_todo:'',
                visibility: 'all', //筛选数据,
                filters:filters
            }
        },
        created(){
            var that = this;

            function watchHashChange() {
                var hash = window.location.hash.slice(1);

                that.visibility = hash;
            }

            watchHashChange();

            window.addEventListener('hashchange', watchHashChange);
        },
        components:{
            TodoList
        },
        computed:{
            todos(){
                return this.$store.state.todos
            },
            filterList(){
                return filters[this.visibility] ? filters[this.visibility](this.todos) : this.todos;
            }
        },
        methods:{

           addTodo(e){
                var content = e.target.value;
               if(content.trim()){
                   this.$store.dispatch('addTodo',{content})
               }
               e.target.value = '';
           }
        },
    }

</script>

<style lang="scss" scoped>
    $boxwidth: 600px;
    *{
        padding: 0;
        margin: 0;
    }
    ul li{
        list-style: none;

    }
    a{
        text-decoration: none;
        &:visited{
             color:black;
         }
    }

    input:focus{
          border: 1px solid #bf616a;
         outline: none;
    }
    #app {
        width: $boxwidth;
        margin: 100px auto;
        overflow:hidden;

        .title {
            font-size: 1.2em;
            color: #cccccc;
        }

        .write-todo {
            width:600px;
            margin:20px auto 0;

            input:first-child {
                width: 580px;
                height: 20px;
                padding: 10px 5px;
                margin: 0 auto;
            }

        }
        .todos-states{
            display: block;
            width: $boxwidth;
            float: right;
            height: 40px;
            overflow:hidden;

            .checked > a{
                border: 1px solid #cccccc;
            }
            ul{
                height:40px;

                li{
                    width: 100px;
                    float: right;
                    display: inline-block;
                    text-align: right;
                    line-height: 40px;
                }
            }

        }
        .todo-list-box{
            display: block;
            width: $boxwidth;
            overflow: hidden;

            ul li{
                display: block;
                width: $boxwidth;
            }

            .todos-list{
                overflow:hidden;


            }
        }
    }
</style>
