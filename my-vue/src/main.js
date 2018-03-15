// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
import {MyPlugin, toast} from './plugin'
import vuexI18n from 'vuex-i18n';  

Vue.use(Vuex);  
const stores = new Vuex.Store({  
    modules: {  
        i18n: vuexI18n.store  
    }  
}); 
Vue.config.productionTip = false

Vue.use(MyPlugin)
Vue.use(toast)

Vue.use(vuexI18n.plugin, stores);  
//Vue.i18n.set('zh-CN')
import  { AlertPlugin } from 'vux'

Vue.use(AlertPlugin)

const vuxLocales = require('json!yaml!vux/src/locales/all.yml')
const componentsLocales = require('json!yaml!src/locales/components.yml')
const globalLocales = require('json!yaml!src/locales/global_locales.yml') || {en: {}, 'zh-CN': {}}


const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en'], globalLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'], globalLocales['zh-CN'])
}


for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}
Vue.i18n.set('zh-CN')


// const translationsEn = {  
//   "content": "This is some {type} content"  
// };  

// Vue.i18n.add('en', translationsEn);  

// // set the start locale to use  
// Vue.i18n.set('en');


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
