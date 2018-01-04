<template>
  <div class="">
    <div class="lh-40 borderb padding20 fs-28 text-black">{{ msg }}</div>
    <div class="padding20">
      <!-- d3.select() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="select">d3.select()</div>
        <div class="lh-36">返回匹配选择器的第一个元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("body");        //选择body元素
  d3.select("#important");  //选择id为important的元素
  d3.select(".content");    //选择类为content的第一个元素
          </code>
        </pre>
      </div>
      


      

    </div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js';

export default {
  data () {
    return {
      msg: 'Transition 过渡'
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
    selectionAttr:function(){
      var d3 = this.d3;
      var dataset = [1,2,3,4,5];
      var svg = d3.select("#selectionAttr_Sample").append("svg");
      var rects = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
          "x":function(d,i){
            return 20+i*160/dataset.length;
          },
          "y":function(d,i){
            return 20
          },
          "width":20,
          "height":100,
          "fill":"#409eff"
        })
    }
  },
  ready:function(){
    this.selectionAttr();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
