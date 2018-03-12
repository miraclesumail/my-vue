<template>
  <div class="hello">
     <div v-if="list.children">
          {{list.name}}
           <recursive :list="detail" v-for="(detail,index) in list.children" :key="index"></recursive>
           <div>------</div>
     </div>

     <div v-else>
         {{list.name}}
     </div>
  </div>
</template>

<script>
// 混入接受一个数组  created mounted
export default {
  name: 'Recursive',
  props:['list'],
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
