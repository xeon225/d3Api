<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <pre>
        <code class="lang-javascript">
    //svg 尺寸
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    //条宽
    var barWidth = 8;
    //数据集
    var dataset = [1,2,3,4,5,6,7,8,9,10];
    //默认线性比例尺
    var linearScale = d3.scaleLinear();
        </code>
      </pre>
    </div>
    
  </div>
</template>

<script>
import Lib from 'assets/Lib.js';

export default {
  data () {
    return {
      msg: '线性比例尺',
      markdownhtml: '<pre><code>123</code></pre>'
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
      //svg 尺寸
      var margin = {top: 20, right: 20, bottom: 20, left: 20},
          width = 500 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;
      //条宽
      var barWidth = 8;
      //数据集
      var dataset = [1,2,3,4,5,6,7,8,9,10];
      //默认线性比例尺
      var linearScale = d3.scaleLinear();
    }
  },
  ready:function(){
    this.scaleLinear();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
