// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import {MyPlugin, toast} from './plugin'

Vue.config.productionTip = false

Vue.use(MyPlugin)
Vue.use(toast)

// 指令顺序 bind inserted update componentUpdated 
 
Vue.directive('focus',{
   'inserted':(el, binding, vnode) => {
       console.log("3-insert"); 
       el.focus()
    },
   'update':function (el, binding, vnode) {
      console.log("3-update 更新");
    },
    componentUpdated: function (el) {
      console.log('componentUpdated')
    }
})

Vue.directive('bgcolor', function(el,binding){
  el.style.background = binding.value
})

// Vue.component('my-component', {
//   template: '<div>A custom component!</div>'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
