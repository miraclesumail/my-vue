export const STORAGE_KEY = 'todos-vue'

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
    window.localStorage.clear()
  }

export const state = {
    todos: JSON.parse(window.localStorage.getItem('STORAGE_KEY') )|| [
        {message:'java', done:true},
        {message:'swift', done:false},
        {message:'php', done:false}
    ]
}  

export const mutations = {
    addTodo (state, { message,name }) {
        console.log(name);
        state.todos = [...state.todos, {
          message,
          done: false
        }]
        // state.todos.push({
        //   message,
        //   done: false
        // })
      },
    
      deleteTodo (state, { todo }) {
        state.todos.splice(state.todos.indexOf(todo), 1)
      },
    
      toggleTodo (state, { todo }) {
        todo.done = !todo.done
      },
    
      editTodo (state, { todo, value }) {
        todo.text = value
      },
    
      toggleAll (state, { done }) {
        state.todos.forEach((todo) => {
          todo.done = done
        })
      },
    
      clearCompleted (state) {
        state.todos = state.todos.filter(todo => !todo.done)
      }
}
