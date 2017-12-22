<template>
  <div class="flex-container left">
    <div class="padding20 lh-28 fonts">
      <div class="text-center fs-16" v-text="data.title"></div>
      <div>
        <a v-link="{ path: '/scales',params: { a: 1 } }">11111111111</a>
        <a v-link="{ path: '/selection',params: { a: 1 } }">22222222222</a>
      </div>
      <div v-highlight>
        <pre>
          <code class='lang-javascript'>
      d3.select('body');        //选择body元素
      d3.select('#important');  //选择id为important的元素
      d3.select('.content');    //选择类为content的第一个元素
          </code>
        </pre>
      </div>
      <div v-for="item in data.data">
        <div class="fs-16"><a :href="item.url" v-text="item.name" class="text-darker"></a></div>
        <div v-for="itemD in item.items">
          <div class="fs-14 marginl20"><a :href="itemD.url" v-text="itemD.name" class="text-dark"></a></div>
          <div class="fs-12 marginl40" v-for="itemL in itemD.moduleList"><a :href="itemL.url" v-text="itemL.name" class="text-dark"></a></div>
        </div>
      </div>
    </div>
    <div>
      <router-view></router-view>
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
    Marker:function(){
      return `<pre>
          <code class='lang-javascript'>
      d3.select('body');        //选择body元素
      d3.select('#important');  //选择id为important的元素
      d3.select('.content');    //选择类为content的第一个元素
          </code>
        </pre>`
    }
  },
  methods: {
  },
  ready:function(){

  }
}
</script>

<style>
.fonts{
  font-family: Raleway,Hiragino Sans GB,sans-serif
}


</style>
