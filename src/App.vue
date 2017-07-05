<template v-cloak>
    <div id="app">

        <header class="title">
            <strong>计划表：</strong>
        </header>
        <section>
            <div class="write-todo">
                <input type="text" v-model="vue_todo">
            </div>
            <div class="todos-states">
                <ul>
                    <li>
                        <a href="/">unfinished</a>
                    </li>
                    <li>
                        <a href="/">finished</a>
                    </li>
                    <li>
                        <a href="/">all</a>
                    </li>
                </ul>
            </div>
            <div class="todo-list-box">
                <ul class="todos-list">
                    <li class="todo">
                        <div class="read-todo">
                            <input type="checkbox" class="checkbox">
                            <label>我要吃饭打豆豆</label>
                            <i class="delete">X</i>
                        </div>
                        <div class="edit-todo">
                            <input type="text">
                        </div>
                    </li>
                    <li class="todo">
                        <div class="read-todo">
                            <input type="checkbox" class="checkbox">
                            <label>我要吃饭打豆豆哈哈哈哈哈哈哈哈哈哈啊哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈啊哈</label>
                            <i class="delete">X</i>
                        </div>
                        <div class="edit-todo">
                            <input type="text">
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {
                vue_todo: ''
            }
        }
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
                        display: block;
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
        }
    }
</style>
