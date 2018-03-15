import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/todo'
import China from '@/components/china'

Vue.use(Router)

// const Hello = (resolve) => {
//   HelloWorld.then((module) => {
//     resolve(module)
//   })
// }

const Index = resolve => require(['../components/HelloWorld'], resolve);
const swiper = resolve => require(['../components/swiper'], resolve);
const home = resolve => require(['../components/home'], resolve);

const Foo = { template: '<div class="foo">foo</div>' }
const Bar = { template: '<div class="bar">bar</div>' }

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/china',
      name: 'china',
      component: China
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar }
      ]
    }
  ]
})
