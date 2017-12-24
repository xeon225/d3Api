<template>
  <div class="flex-container top left">
    <div class="nav borderr fontsNav" style="width:200px;height:100%">
      <div class="padding20 borderb">
        <a href="" v-link="{ path: '/' }" class="flex-container left text-blue">{{selected}}
          <svg width="40" height="40" viewBox="0,0,96,96">
            <path :d="data.logo" style="fill:#409eff"></path>
          </svg>
          <div class="marginl10 text-bolder" style="font-size: 22px;" v-text="data.title"></div>
        </a>
        
      </div>
<!--       <div>
        <a v-link="{ path: '/scales',params: { a: 1 } }">11111111111</a>
        <a v-link="{ path: '/selection',params: { a: 1 } }">22222222222</a>
      </div> -->
      <div class="paddingh20">
        <div v-for="item in data.data">
          <div class="fs-16 text-bolder margint20 lh-40"><span v-text="item.name" class="text-darker"></span></div>
          <div v-for="itemD in item.items" class="lh-40">
            <div class="fs-14"><a v-link="{ path: itemD.url}" v-text="itemD.name" class="text-dark"></a></div>
<!--             <div class="fs-12 lh-28" v-for="itemL in itemD.moduleList" v-if="false"><a :href="itemL.url" v-text="itemL.name" class="text-dark"></a></div> -->
          </div>
        </div>
      </div>
      
    </div>
    <div class="flex1 flex-container-col" style="overflow-y: scroll;height:100%;">
      <router-view style="width:100%" :params="params"></router-view>
      <div class="text-center fs-10 lh-40" style="color: #171717;font-family: Josefin Sans,sans-serif;">Proudly Powered by CMUI + Vue + Webpack + D3</div>
    </div>
  </div>
  
</template>

<script>
import Lib from 'assets/Lib.js';
import Vue from 'vue';
import Highlight from 'assets/highlight.js'
Vue.use(Highlight)
export default {
  components: {
  },
  computed:{
    data:function(){
      return Lib.dataApi
    },
    selected:function(){
      console.log(this.$route)
      console.log(this.$route.params)
      console.log(this.$route.query)
    }
  },
  methods: {
  },
  ready:function(){

  }
}
</script>

<style>
html,body{
  height:100%;
}

.nav{
}
.nav a{
  margin: 0;
  padding: 0;
  text-decoration: none;
  position: relative;
  transition: .15s ease-out;
}
.nav a:hover {
    color: #409eff;
}
.paddingh10 {
  padding-left:10px !important;
  padding-right:10px !important;
}
</style>
