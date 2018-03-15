 <template>
    <div class="parent">
      <ul>
        <li v-for="(detail,index) in allCategory" :key="index" @click="choose(detail.message)"> {{detail.message}} </li>
      </ul>
     
      <div v-for="(todo,index) in children" :key="index" >
          <ul class="small">
              <li v-for="(detail,index) in todo" :key="index"> {{detail.name}} </li>
          </ul>
      </div>

      <h2>Parent</h2>

       <input type="radio" value="v-a" v-model="view">a
       <input type="radio" value="v-b" v-model="view">b
         <transition name="component-fade" mode="out-in">
         <component v-bind:is="view"></component>
       </transition>

       <tab :line-width=2 bar-active-color="#FE2D4A" active-color="#FE2D4A">
				  <tab-item :selected="currentTab==0"  @on-item-click="say">尾单甩卖</tab-item>
				  <tab-item :selected="currentTab==1" @on-item-click="say">高额返利</tab-item>
				  <tab-item :selected="currentTab==2" @on-item-click="say">早订优惠</tab-item>
				  <tab-item :selected="currentTab==3" @on-item-click="say">多人立减</tab-item>
      </tab>	

       <p>赛车列表</p>
       <ul>
           <li v-for="(car,index) in cars" :key="index">
               <car :car="car"> </car>
           </li>
       </ul>

       <label for="add">新增赛车</label> <input type="text" id="add" @keyup.enter="submit"> 
       <label for="price">赛车价格</label> <input type="text" ref="price" id="price" v-model="price"> 
         
        <router-link to="/home/foo">Go to foo</router-link>
        <router-link to="/home/bar">Go to bar</router-link>
        <router-view class="child-view"></router-view>
      
    </div>
 </template>
 
<script>
    import { mapGetters, mapActions } from 'vuex'
    import { Tab, TabItem } from "vux"
    import Car from './car.vue'
    import axios from 'axios'
    import { Alert, TransferDomDirective as TransferDom } from 'vux'

    //axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

    export default {
        name: 'Home',
        directives: {
            TransferDom
        },

        components: {
            Tab,TabItem,Car,Alert,
            'v-a': {
            template: '<div>Component A</div>'
            },
            'v-b': {
            template: '<div>Component B</div>'
            }
        },
        data () {
            return {
               show:true,
               view:'v-a',
               currentTab:0,
               price:''

        }
      },
      watch: {
        $route(to, from) {
          console.log(to);
          console.log(from);
       }
      },
      created(){
          //axios.get('http://localhost:4000/items').then(res => console.log(res.data))
          this.$store.dispatch("getByName",{name:"五星"});
      },
      computed:{
          ...mapGetters({
              allCategory:'lottery',
              children:'children',
              cars:'cars'
          })
      },
      methods:{
          choose(name){
              this.$store.dispatch("getByName",{name});
          },
          say(index){
              console.log(index)
          },
          submit(e){
               console.log('ffff')
              let name = e.target.value;
              console.log(this.$refs.price.value);

              if(!this.$refs.price.value){
                  this.$vux.alert.show({
                    title: 'VUX is Cool',
                    content: this.$t('Do you agree?'),
                    onShow () {
                    console.log('Plugin: I\'m showing')
                    },
                    onHide () {
                    console.log('Plugin: I\'m hiding now')
                    }
                })
                return
              }
              axios.post('http://localhost:4000/items/add',{name:"吗的歌单", price:1000}).then(res => console.log(res.data))
          }
      }
    }
</script> 

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
