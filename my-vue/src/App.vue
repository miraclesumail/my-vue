<template>
  <div id="app">
    <div class="url-list">
         <router-link to="/todo">Go to Todo</router-link>
         <router-link to="/china">Go to China</router-link>
    </div>
   
    <div style="float:left;width:80%">
       <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.url-list{
  float: left;width:20%;
}

a{display: block;text-decoration: none;margin-bottom: 10px}

ul,li{margin: 0}
li{list-style: none}
</style>
