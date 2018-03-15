<template>
  <div class="hello">
       <header>
          <input class="new-todo"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            @keyup.enter="addTodo">
       </header>
    
       <ul>
            <li v-for="(todo,index) in filteredTodos" :key="index">
               <input type="checkbox" :checked="todo.done" @change="toggleTodo({ todo: todo })">
                   <span>{{ todo.message }}</span>   <button @click="deleteTodo(todo)"></button>
            </li>
       </ul>

       <div> sitll get {{remaining}} {{remaining | popularize('item')}} things to do </div>
       <ul class="filters">
        <li v-for="(val, key) in filters" :key="key">
            <button
              :class="{ selected: visibility === key }"
              @click="visibility = key">{{ key | capitalize }}
            </button>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    finish: todos => todos.filter(todo => todo.done)
}

export default {
  name: 'Todo',
  data () {
    return {
       filters: filters,
       visibility: 'all'
    }
  },

   computed: {
        ...mapGetters({
            todos: 'getTodo',
        }),
      //  todos() {
      //     return this.$store.state.todos
      //  },
       filteredTodos (){
          return filters[this.visibility](this.todos)
      },
       remaining(){
          return this.todos.filter(todo => !todo.done).length
       } 
   },

   methods: {
      ...mapMutations([
         'toggleTodo',
         'deleteTodo'
      ]),
      addTodo(e) {
         let message = e.target.value;
         if(message.trim()){
           this.$store.commit('addTodo', {message, name:'axiba'})
         }
         e.target.value = ''
      },

      createPromise(url) {
          return new Promise((resolve, reject) => {
               aixos.get(url).then(res => resolve(res.data))
          })
      }
   },
    filters:{
          capitalize: s => s.charAt(0).toUpperCase() + s.slice(1),
          popularize: (n,w) => n <= 1 ? w : w + 's'

   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .selected{background: greenyellow}
</style>