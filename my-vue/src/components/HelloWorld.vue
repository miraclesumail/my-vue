<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   
    <div v-for="(detail,index) in lists" :key="index">
              <recursive :list="detail" ></recursive>

    </div>
  </div>
</template>

<script>
import Recursive from './recursive.vue'

var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

var qwe = {
  mounted: function () {
    this.hellos()
  },
  methods: {
    hellos: function () {
      console.log('hello from qwe!')
    }
  }
}

// 混入接受一个数组  created mounted
export default {
  name: 'HelloWorld',
  mixins:[myMixin,qwe],
  components:{Recursive},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists:[
        {name:'front-end', children:[{name:'jquery'},{name:'css'}]},
        {name:'back-end', children:[{name:'java'},{name:'php'}]},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
