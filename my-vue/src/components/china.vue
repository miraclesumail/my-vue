<template>
  <div class="hello">
      <input v-focus type="text" placeholder="笛梵暖暖的" id="input" value="dddfff">
      <button @click="change">click me </button>

      <div class="dd" v-bgcolor="color"></div>
      <button @click="qwe">change</button>

      <div v-if="list">
          <detail v-for="(val,index) in list " :key=index :todo="val" :msg="miracle" v-on:increment="incrementTotal"> </detail>
      </div>   
      <my-component> </my-component> 
      <button @click="getData">获取数据 {{total}}</button> 

      <div id="message-event-example" class="demo">
        <p v-for="(msg,index) in messages" :key="index">{{ msg }}</p>
      <button-message v-on:message="handleMessage"></button-message>

      <div id="example-1">
            <button @click="show = !show">
                Toggle render
            </button>
            <transition name="slide-fade">
                <p v-if="show">hello</p>
            </transition>
      </div>
     
      <button @click="isEditing = !isEditing">
                Toggle edit
            </button>

      <transition mode="out-in">
            <button v-if="isEditing" key="save">
                Save
            </button>
            <button v-else key="edit">
                Edit
            </button>
      </transition>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import Detail from './detail.vue'

export default {
  components: { Detail,
     'my-component':{
            template: '<div>A custom component!</div>'
      },
      'button-message':{
          template: `<div>
                <input type="text" v-model="message" />
                <button v-on:click="handleSendMessage">Send</button>
                     </div>`,
           data: function () {
                return {
                    message: 'test message'
                }
            },
            methods: {
                handleSendMessage: function () {
                  this.$emit('message', { message: this.message })
                }
            }           
      }
  },  
  name: 'China',
  data () {
    return {
        color:'purple',
        list:'',
        miracle:"qweasd",
        total:0,
        messages: [],
        show: true,
        isEditing:true
     }
  },
  mounted(){
     axios.get('static/demo.json').then(res => console.log(res.data))
  },
  methods: {
      incrementTotal(){
          this.total++
      },
      handleMessage(playload){
          this.myMethod()
          this.$toast('axiba')
          this.messages.push(playload.message)
      },
      change(){
          document.getElementById('input').value = "fggewfw"
      },
      save() {
          console.log('e2r23r3')
      },
      qwe() {
        this.color = 'green';
      },
      getData(){
          this.createPromise('static/demo.json').then(data => this.list = data.list)
      },

      createPromise(url){
          return new Promise((resolve, reject) => {
               axios.get(url).then(res => resolve(res.data))
          })
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .dd{width:100px;height: 100px}

   .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
