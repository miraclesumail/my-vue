<template>
  <div class="hello">
    <h1 @click="add">{{ todo.name }}</h1>
    <h2>{{ todo.country }}</h2>
     {{msg}} {{axiba}}
  </div>
 
</template>

<script>
export default {
  name: 'Detail',
  props: {'todo':Object, 'msg':String,
      'axiba': {
      type: Number,
      validator: function (value) {
        return value > 10
      },
      default: 18
    },
  },
  data () {
    return {
     
    }
  },
   methods:{
        add(){
            this.$emit('increment')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>