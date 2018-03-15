//export const STORAGE_KEY = 'todos-vue'

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
    window.localStorage.clear()
  }

const state = {
    category: JSON.parse(window.localStorage.getItem('STORAGE_KEY') )|| [
        {message:'五星', children:[ 
            [{name:'合值1'}, {name:'单双1'}, {name:'单双1'}, {name:'龙虎1'}, {name:'大小1'}],
            [{name:'合值2'}, {name:'单双2'}, {name:'单双2'}, {name:'龙虎2'}, {name:'大小2'}],
            [{name:'合值3'}, {name:'单双3'}, {name:'单双3'}, {name:'龙虎3'}, {name:'大小3'}],
            [{name:'合值4'}, {name:'单双4'}, {name:'单双4'}, {name:'龙虎4'}, {name:'大小4'}]
        ],kind:'single'},
        {message:'三星', children:[ 
            [{name:'合值11'}, {name:'单双11'}, {name:'单双11'}, {name:'龙虎11'}, {name:'大小11'}],
            [{name:'合值22'}, {name:'单双22'}, {name:'单双22'}, {name:'龙虎22'}, {name:'大小22'}],
            [{name:'合值33'}, {name:'单双33'}, {name:'单双33'}, {name:'龙虎33'}, {name:'大小33'}],
            [{name:'合值44'}, {name:'单双44'}, {name:'单双44'}, {name:'龙虎44'}, {name:'大小44'}]
        ],kind:'double'},
        {message:'中三', children:[ 
            [{name:'合值111'}, {name:'单双111'}, {name:'单双111'}, {name:'龙虎111'}, {name:'大小111'}],
            [{name:'合值222'}, {name:'单双222'}, {name:'单双222'}, {name:'龙虎222'}, {name:'大小222'}],
            [{name:'合值333'}, {name:'单双333'}, {name:'单双333'}, {name:'龙虎333'}, {name:'大小333'}],
            [{name:'合值444'}, {name:'单双444'}, {name:'单双444'}, {name:'龙虎444'}, {name:'大小444'}]
        ],kind:'single'}
    ],
    child:''
}  

const getters = {
    lottery:state => state.category,
    children:state => state.child

}

const actions = {
    getByName({commit}, option){
        let secondOrder = state.category.filter(item => item.message == option.name)[0].children;
        console.log(secondOrder);
        commit('setSecond',{secondOrder})
    }
}

const mutations = {
    setSecond (state, { secondOrder }) {
        state.child = secondOrder
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
