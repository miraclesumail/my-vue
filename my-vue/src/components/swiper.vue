<template>
  <div>
    <swiper auto loop @on-index-change="handleSwiperChange" :aspect-ratio="rate" :list="loadedPicList" dots-position="center"></swiper>
    
    <ul>
        <li v-for="(country,index) in country" :key="index">
            {{country.name}}
        </li>
    </ul>
        <div>你选择的是 {{target.character}}</div>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import { mapGetters, mapActions } from 'vuex'

// 混入接受一个数组  created mounted
export default {
  name: 'HelloWorld',
  components:{
     Swiper
  },
  data () {
    return {
        loadedPicList:[{
        url: 'http://www.baidu.com',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵fua'
        }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
        }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }],
        rate:0.3
    }
  },
  watch:{
      $route: function(to, from) {
          console.log(from.path);
          console.log(to.path); 
     }
  },
  created(){
      this.$store.dispatch("setName",{username:"china"});
  },
  computed:{
        ...mapGetters({
            country:'getCountry',
            target:'country'
        })
  },

  methods:{
      handleSwiperChange(){
          console.log('change')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
