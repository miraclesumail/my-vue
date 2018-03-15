<template>
  <div class="hello">
     <p>车名 {{car.name}}</p>
     <p>车价 {{car.price}}</p>
  </div>
 
</template>

<script>
export default {
  name: 'Car',
  props: {
      'car':Object  
  },
  data () {
    return {
     
    }
  },
   methods:{
        add(){
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>