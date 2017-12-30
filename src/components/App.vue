<template>
  <div class="flex-container top left">
    <div class="btn-nav pos-f top15 right25 bg-white padding5 clearfix" @click="showNav = !showNav" style="box-shadow: 2px 2px 4px #ccc;border-radius: 4px;">
      <svg width="40" height="40" viewBox="0,0,96,96" class="float-left">
        <path :d="data.logo" style="fill:#409eff"></path>
      </svg>
    </div>
    <div class="nav borderr fontsNav pos-f top0 bottom0 left0" :class="showNav && 'show-nav'">
      <div class="padding20 borderb">
        <a href="#!" class="flex-container left text-blue">
          <svg width="40" height="40" viewBox="0,0,96,96">
            <path :d="data.logo" style="fill:#409eff"></path>
          </svg>
          <div class="marginl10 text-bolder" style="font-size: 22px;" v-text="data.title"></div>
        </a>
      </div>
      <div class="paddingh20" v-if="routerReady">
        <div v-for="item in data.data">
          <div class="fs-16 text-bolder margint20 lh-40"><span v-text="item.name" class="text-darker"></span></div>
          <div v-for="itemD in item.items" class="lh-40">
            <div class="fs-14"><a :href="'#!'+itemD.url" v-text="itemD.name" class="text-dark" :class="selected == itemD.url && 'current'" @click="showNav = !showNav"></a></div>
            <div class="fs-12 lh-28" v-for="itemL in itemD.moduleList" v-show="selected == itemD.url"><a href="javascript:void(0)" @click="goAnchor(itemL.url)" v-text="itemL.name" class="text-dark"></a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex1 content flex-container-col" style="min-height:100%;overflow-y: scroll;">
      <router-view style="width:100%" v-if="routerReady"></router-view>
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
  data () {
    return {
      routerReady:false,
      showNav:false
    }
  },
  components: {
  },
  computed:{
    data:function(){
      return Lib.dataApi
    },
    selected:function(){
      let selected = this.$route ? this.$route.path : ''
      return selected
    }
  },
  methods: {
    goAnchor:function(selector) {
      let anchor = this.$el.querySelector(selector);
      let scrollTop = anchor.offsetTop;
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop
    }
  },
  ready:function(){
    this.routerReady=true
  }
}
</script>

<style>
html,body{
  height:100%;
}

.nav{
  transition: .2s ease-out;
  width: 250px;
  height: 100%;
  overflow: hidden;
}
.nav>div{
  width: 250px;
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
.nav a.current {
    color: #409eff;
}
.paddingh10 {
  padding-left:10px !important;
  padding-right:10px !important;
}



</style>
