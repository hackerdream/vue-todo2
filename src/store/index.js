import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './actions'
import {mutations} from './mutations'
import {STORAGE_KEY} from  './mutations'

Vue.use(Vuex);

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

const state = ({
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
});

const localPlugin = store =>{
  store.subscribe((mutations,{todos})=>{
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [localPlugin],
  strict: true
})