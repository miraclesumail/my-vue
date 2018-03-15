//export const STORAGE_KEY = 'todos-vue'
import axios from 'axios'

if (navigator.userAgent.indexOf('PhantomJS') > -1) {
    window.localStorage.clear()
  }

axios.get('http://localhost:4000/items').then(res => state.cars = res.data)

const state = {
    countries: JSON.parse(window.localStorage.getItem('STORAGE_KEY') )|| [
        {name:'phillipine', character:"疯狂快点快点看快点"},
        {name:'usa', character:"特朗普要啊彪额"},
        {name:'china', character:"洗净瓶新时代特设社会主义"}
    ],
    target:'',
    cars: ''
}  

const getters = {
    getCountry:state => state.countries,
    country:state => state.target,
    cars:state => state.cars
}

const actions = {
    setName({ commit }, option) {
        //commit(types.INIT_REPOS);
        // return api(
        //     `https://api.github.com/users/${username}`
        // ).then(profile => {
        //     commit(types.SET_PROFILE, { profile });
        // });
        let country = state.countries.filter(country => country.name == option.username)[0]
        commit('setCountry',{country})
    }
};

const mutations = {
    setCountry (state, { country }) {
        state.target = {...country, message:"ddjdjjdj"
         }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
