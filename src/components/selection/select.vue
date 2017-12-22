<template>
  <div class="padding20">
    <div class="fs-20">{{ msg }}</div>
    <div class="margint10">
      <!-- d3.select() -->
      <div>
        <div class="fs-16 text-blue" id="select">d3.select()</div>
        <div class="text-dark">返回匹配选择器的第一个元素</div>
        <pre>
          <code class="lang-javascript">
      d3.select("body");        //选择body元素
      d3.select("#important");  //选择id为important的元素
      d3.select(".content");    //选择类为content的第一个元素
          </code>
        </pre>
      </div>
      
      <!-- d3.selectAll() -->
      <div>
        <div class="fs-16 text-blue" id="selectAll">d3.selectAll()</div>
        <div class="text-dark">返回匹配选择器的所有元素</div>
        <pre>
          <code class="lang-javascript">
      d3.selectAll("p");            //选择所有的p元素
      d3.selectAll(".content");     //选择类为content的所有元素
      d3.selectAll("ul li");        //选择ul中所有的li元素
          </code>
        </pre>
      </div>
      
      
      <!-- d3.selectionAttr() -->
      <div>
        <div class="fs-16 text-blue" id="selectionAttr">selection.attr(name[,value])</div>
        <div class="text-dark">设置或获取选择集的属性,name是属性名,value是属性值</div>
        <pre>
          <code class="lang-javascript">
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
          "fill":"steelblue"
        })
          </code>
        </pre>
      </div>
      <!-- d3.selectionClassed() -->
      <div>
        <div class="fs-16 text-blue" id="selectionClassed">d3.classed(name[,value])</div>
        <div class="text-dark">设定或获取选择集的css类,name是类名,value是一个布尔值</div>
        <pre>
          <code class="lang-javascript">
      d3.select("p");            
          .attr("class", "text-red fs-12")  //类名间用空格隔开
          </code>
        </pre>
      </div>






      <div>
        <div class="fs-16 text-blue">selection.empty()</div>
        <div class="text-dark">如果选择集为空,则返回true;如果不为空,返回false</div>
        <div class="fs-16 text-blue">selection.node()</div>
        <div class="text-dark">返回第一个非空元素,如果选择集为空,返回null</div>
        <div class="fs-16 text-blue">selection.size()</div>
        <div class="text-dark">返回选择集中的元素个数</div>
        <pre>
          <code class="xml">
      &lt;p&gt; Text 1 &lt;/p&gt;
      &lt;p&gt; Text 2 &lt;/p&gt;
      &lt;p&gt; Text 3 &lt;/p&gt;
      &lt;script&gt;
        var para = d3.selectAll("p");
        console.log(para.empty())     //false
        console.log(para.node())      //&lt;p&gt; Text 1 &lt;/p&gt;
        console.log(para.size())      //3
      &lt;/script&gt;
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
      msg: '选择(select)'
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
      var svg = d3.select("#selectionAttr").append("svg");
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
          "fill":"steelblue"
        })
    }
  },
  ready:function(){
    this.selectionAttr();
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
