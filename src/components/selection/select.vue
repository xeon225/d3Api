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
      
      <!-- d3.selectAll() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectAll">d3.selectAll()</div>
        <div class="lh-36">返回匹配选择器的所有元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.selectAll("p");            //选择所有的p元素
  d3.selectAll(".content");     //选择类为content的所有元素
  d3.selectAll("ul li");        //选择ul中所有的li元素
          </code>
        </pre>
      </div>
      
      <!-- d3.selectionAttr() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionAttr">selection.attr(name[,value])</div>
        <div class="lh-36">设置或获取选择集的属性,name是属性名,value是属性值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
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
        <div id="selectionAttr_Sample">
        </div>
      </div>
      <!-- d3.selectionClassed() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionClassed">selection.classed(name[,value])</div>
        <div class="lh-36">设定或获取选择集的css类,name是类名,value是一个布尔值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  rects.classed({   //根据索引给元素添加不同的css类
    "even":function(d,i){return i%2==0?true:false;},
    "odd":function(d,i){return i%2==0?false:true;}
  })
  rects.on("click",function(){    //点击时切换css类
    var rect=d3.select(this);
    if(rect.classed("stroke")){
      rect.classed("stroke",false);
    }else{
      rect.classed("stroke",true);
    }
  })
          </code>
        </pre>
        <div id="selectionClassed_Sample">
        </div>
      </div>

      <!-- d3.selectionStyle() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionClassed">selection.style(name[,value[,priority]])</div>
        <div class="lh-36">返回选择集中第一个非空元素中名为name的样式值，或设置选择集中所有元素中名为name的样式值为value参数指定的值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  rects.classed({   //根据索引给元素添加不同的css类
    "even":function(d,i){return i%2==0?true:false;},
    "odd":function(d,i){return i%2==0?false:true;}
  })
  rects.style({
    "stroke-width":5,
    "stroke":function(d,i){
      return "rgb("+10*d+","+10*(25-(d*3))+","+d*2+")";
    }
  })
          </code>
        </pre>
        <div id="selectionStyle_Sample">
        </div>
      </div>
      <div class="margint50 marginb20">
        <div class="fs-22 text-black">selection.empty()</div>
        <div class="lh-36">如果选择集为空,则返回true;如果不为空,返回false</div>
        <div class="fs-22 text-black">selection.node()</div>
        <div class="lh-36">返回第一个非空元素,如果选择集为空,返回null</div>
        <div class="fs-22 text-black">selection.size()</div>
        <div class="lh-36">返回选择集中的元素个数</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  &lt;p&gt; Text 1 &lt;/p&gt;
  &lt;p&gt; Text 2 &lt;/p&gt;
  &lt;p&gt; Text 3 &lt;/p&gt;
  &lt;script&gt;
    var para = d3.selectAll("p");
    console.log(para.empty())      //false
    console.log(para.node())       //&lt;p&gt; Text 1 &lt;/p&gt;
    console.log(para.size())       //3
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
      msg: 'Select 选择'
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
    },
    selectionClassed:function(){
      var d3 = this.d3;
      var dataset = [1,2,3,4,5];
      var svg = d3.select("#selectionClassed_Sample").append("svg");
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
      rects.classed({
        "even":function(d,i){return i%2==0?true:false;},
        "odd":function(d,i){return i%2==0?false:true;}
      })
      rects.on("click",function(){
        var rect=d3.select(this);
        if(rect.classed("stroke")){
          rect.classed("stroke",false);
        }else{
          rect.classed("stroke",true);
        }
      })
    },
    selectionStyle:function(){
      var d3 = this.d3;
      var dataset = [1,2,3,4,5];
      var svg = d3.select("#selectionStyle_Sample").append("svg");
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
          "fill":"none"
        })
      rects.style({
        "stroke-width":5,
        "stroke":function(d,i){
          return "rgb("+10*d+","+10*(25-(d*3))+","+d*2+")";
        }
      });
      // console.log(rects.style("stroke"))
    }
  },
  ready:function(){
    this.selectionAttr();
    this.selectionClassed();
    this.selectionStyle();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
svg .even{
  fill: red;
}
svg .odd{
  fill: orange;
}
svg .stroke{
  stroke: black;
}
</style>
