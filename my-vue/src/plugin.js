export let MyPlugin = {
      install:
        function (Vue, options) {
            // 1. 添加全局方法或属性
            Vue.myGlobalMethod = function () {
               
            }
          
            // 2. 添加全局资源
            Vue.directive('my-directive', {
              bind (el, binding, vnode, oldVnode) {
                // 逻辑...
              }
             
            })
          
            // 3. 注入组件
            Vue.mixin({
              created: function () {
                
              }
             
            })
          
            // 4. 添加实例方法
            Vue.prototype.myMethod = function (methodOptions) {
                console.log('new plugin')
            }
          }
        
      
  }

export let toast = {
     install:function(Vue,options){
        let opt = {
            defaultType:'bottom',   // 默认显示位置
            duration:'2500'         // 持续时间
        }
        for(let property in options){
            opt[property] = options[property];  // 使用 options 的配置
        }

         Vue.prototype.$toast = (tips,type) => {
            if(type){
                opt.defaultType = type;         // 如果有传type，位置则设为该type
            }
            if(document.getElementsByClassName('vue-toast').length){
                // 如果toast还在，则不再执行
                return;
            }
            let toastTpl = Vue.extend({
                template: '<div class="vue-toast toast-'+opt.defaultType+'">' + tips + '</div>'
            });
            let tpl = new toastTpl().$mount().$el;
            document.body.appendChild(tpl);
            setTimeout(function () {
                document.body.removeChild(tpl);
            }, opt.duration)
        }
        ['bottom', 'center', 'top'].forEach(type => {
            Vue.prototype.$toast[type] = (tips) => {
                return Vue.prototype.$toast(tips,type)
            }
        })
     }
}  
  