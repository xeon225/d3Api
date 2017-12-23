<template>
  <div class="padding20">
    <div class="fs-20">{{ msg }}</div>
    <div class="margint30">
      <div class="fs-16 text-darker">d3.scaleLinear()</div>
      <div class="text-dark">创建一个线性比例尺</div>
      <pre v-highlight>
        <code class="lang-javascript">
    var linearScale = d3.scaleLinear(); //默认线性比例尺
        </code>
      </pre>
      <div class="fs-16 text-darker">linear(x)</div>
      <div class="text-dark">输入一个在<span class="text-red">定义域</span>内的值，返回<span class="text-red">值域</span>内对应的值</div>
      <pre>
        <code class="lang-javascript">
    var linearScale = d3.scaleLinear();
    lineScale(5); //返回5
        </code>
      </pre>
    </div>
    <div id="scaleLinear"></div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js';

export default {
  data () {
    return {
      msg: '线性比例尺'
    }
  },
  components: {

  },
  computed:{
    d3:function(){
      return Lib.d3
    }
  },
  methods: {
    scaleLinear:function(){
      var d3 = this.d3;
      
    }
  },
  ready:function(){
    this.scaleLinear();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.axis path, .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>
