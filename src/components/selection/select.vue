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
        <div class="fs-22 text-black" id="selectionStyle">selection.style(name[,value[,priority]])</div>
        <div class="lh-36">返回选择集中第一个非空元素中名为name的样式值，或设置选择集中所有元素中名为name的样式值为value参数指定的值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
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

      <!-- d3.selectionProperty() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionProperty">selection.property(name[,value])</div>
        <div class="lh-36">一些HTML元素具有特殊的内置属性,使用标准的属性或样式操作符是访问不到的</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#text-id")
    .property('value',function(){
      return d3.select(this).property('id');  //获取id属性的值
    });
  d3.select("#checkbox-id")
    .property('checked',true);       //设置复选框的checked属性
          </code>
        </pre>
        <div id="selectionProperty_Sample">
          <input type="text" id="text-id">
          <input type="checkbox" id="checkbox-id">
        </div>
      </div>

      <!-- d3.selectionText() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionText">selection.text([value])</div>
        <div class="lh-36">返回第一个非空元素的文本内容,或设置选择集中所有元素的文本内容为指定的值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#selectionText_Sample")
    .text("selection.text([value])");   //设置元素的文本
  d3.select("#selectionText_Sample")
    .text(function(){
      return "new text: "+d3.select(this).text();
    });   //设置元素的文本
          </code>
        </pre>
        <div id="selectionText_Sample">
        </div>
      </div>

      <!-- d3.selectionHtml() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionHtml">selection.html([value])</div>
        <div class="lh-36">html操作符基于innerHTML属性,设置内部HTML的内容为value参数指定的值并取代任何已有的子元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#selectionHtml_Sample")
    .html("<h1>hello, this is h1</h1>");   //设置innerHTML的内容
  d3.select("#selectionHtml_Sample")
    .html(function(d,i){    //用函数设置innerHTML的内容
      var old = d3.select(this).html();   //获取innerHTML的内容
      var newHtml = old + "<h2>hello, I am h2</h2>"
      return newHtml;
    });
          </code>
        </pre>
        <div id="selectionHtml_Sample">
        </div>
      </div>

      <!-- d3.selectionAppend() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionAppend">selection.append(name)</div>
        <div class="lh-36">在当前选择集的最后追加指定名称的子元素,返回的新选择集包含这个新追加的子元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //向#selectionAppend_Sample标签追加子元素svg
  var svg = d3.select("#selectionAppend_Sample").append("svg")
  //向svg元素追加有svg命名空间的rect子元素
  svg.append("svg:rect")
      </code>
        </pre>
        <div id="selectionAppend_Sample">
        </div>
      </div>

      <!-- d3.selectionInsert() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionInsert">selection.insert(name[,before])</div>
        <div class="lh-36">如果指定了before参数,则在选择集中的before参数指定的元素前添加name参数指定的元素;如果未指定before参数或没有子元素匹配before参数,则直接使用selection.append的规则追加name参数指定的元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //向svg中追加子元素rect
  svg.insert("rect");
  //在svg中的rect子元素前增加circle元素
  svg.insert("circle", "rect");
      </code>
        </pre>
        <div id="selectionInsert_Sample">
        </div>
      </div>

      <!-- d3.selectionRemove() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionRemove">selection.remove()</div>
        <div class="lh-36">从当前文档删除选择中所有的元素,并将这些元素返回</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //移除circle元素
  d3.select("circle").remove();
          </code>
        </pre>
      </div>

      <!-- d3.selectionData() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionData">selection.data(values[,key])</div>
        <div class="lh-36">给当前选定的所有元素依次绑定values数组中的数据</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //获取selection元素已绑定的数据
  selection.data()
          </code>
        </pre>
      </div>

      <!-- d3.selectionEnter() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionEnter">selection.enter()</div>
        <div class="lh-36">返回输入选择</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  var data = ["text1", "text2", "text3", "text4"];
  var update_selection = svg.selectAll('text')
              .data(data)
              .enter()
              .append("text").attr({
                x: '20',
                y: function(d, i){return 20 + 20 * i;},
                fill: 'green'
              })
              .text(function (d, i) {return d;})
          </code>
        </pre>
        <div id="selectionEnter_Sample">
        </div>
      </div>

      <!-- d3.selectionExit() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionExit">selection.exit()</div>
        <div class="lh-36">返回需要移除的元素选择</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  var update_selection = svg.selectAll('div')
              .data(data)
              .enter()
              .append("div")
              .text(function (d) {return d;});
  var exitSvg = svg.selectAll("div")
              .data([7, 8, 9, 5, 6], function(d) {return d;})
  exitSvg.enter()
          .append("div")
          .text(function(d) {return d;})
  exitSvg.exit().remove()
          </code>
        </pre>
        <div id="selectionExit_Sample">
        </div>
      </div>

      <!-- d3.selectionFilter() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionFilter">selection.filter(selector)</div>
        <div class="lh-36">过滤选择,返回一个新的选择只包含参数selector是true的元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  var data = ["text1", "text2", "text3", "text4"];
  var update_selection = svg.selectAll('text')
              .data(data)
              .enter()
              .append("text").attr({
                x: '20',
                y: function(d, i){return 20 + 20 * i;},
                fill: 'green'
              })
              .text(function (d, i) {return d;})
          </code>
        </pre>
        <div id="selectionFilter_Sample">
        </div>
      </div>

      <!-- d3.selectionDatum() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionDatum">selection.datum([value])</div>
        <div class="lh-36">获取或设置每个选定的元素绑定的数据</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#selectionDatum_Sample").selectAll("div")
      .datum(function(){ return this.dataset; });
      .text(function(d){ return d.username; });
          </code>
        </pre>
        <div id="selectionDatum_Sample">
          <div data-username="D3 user"></div>
          <div data-username="D3 fans"></div>
        </div>
      </div>

      <!-- d3.selectionSort() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionSort">selection.sort(comparator)</div>
        <div class="lh-36">用指定的比较函数对当前选择的元素排序,默认为d3.ascending(升序排序)</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#selectionSort_Sample").sort(function(a,b){
    return a - b
  })
          </code>
        </pre>
        <div id="selectionSort_Sample">
        </div>
      </div>

      <!-- d3.selectionOn() -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionOn">selection.on(type[,listener[,capture]])</div>
        <div class="lh-36">给当前选择的每个元素,绑定或移除指定类型的事件监听器</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select(".on_btn").on("click", function(){
    d3.select("#selectionSort_Sample").selectAll("text")
      .text(function(d,i){
        return "new:" + d.value*3
      })
  });
          </code>
        </pre>
        <div id="selectionOn_Sample" class="flex-container top left">
          <div class="btn small radius on_btn">y=3*x</div>
        </div>
      </div>

      <!-- d3.event -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="d3Event">d3.event</div>
        <div class="lh-36">存储当前事件(如果有的话)的全局对象</div>
      </div>
      
      <!-- d3.mouse -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="d3Mouse">d3.mouse(container)</div>
        <div class="lh-36">返回当前d3.event相对于指定容器container的x和y坐标</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //取得鼠标位置相对于body元素的偏移坐标
  var pos1 = "d3.mouse pos: " + d3.mouse(d3.select("body")[0][0]);
          </code>
        </pre>
        <div id="d3Mouse_Sample" class="flex-container left top">
          <div class="btn small radius reverse disabled">坐标</div>
        </div>
      </div>

      <!-- d3.selectionTransition -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionTransition">selection.transition()</div>
        <div class="lh-36">为当前选择集开启一段过渡动画</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //取得鼠标位置相对于body元素的偏移坐标
  var pos1 = "d3.mouse pos: " + d3.mouse(d3.select("body")[0][0]);
          </code>
        </pre>
        <div id="selectionTransition_Sample" class="flex-container left top">
          <div class="btn small radius">开始</div>
        </div>
      </div>

      <!-- d3.selectionSelect -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionSelect">selection.select(selector)</div>
        <div class="lh-36">对当前选中的每个元素,选中其后代中第一个</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#selectionSelect_Sample")
      .selectAll("dl").select("dt")
      .style("color","red");
          </code>
        </pre>
        <div id="selectionSelect_Sample">
          <div>
            <dl>
              <dt>title1</dt>
              <dd>content</dd>
              <dd>content</dd>
            </dl>
            <dl>
              <dt>title2</dt>
              <dd>content</dd>
              <dd>content</dd>
            </dl>
          </div>
        </div>
      </div>
  
      <!-- d3.selectionSelectAll -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionSelectAll">selection.selectAll(selector)</div>
        <div class="lh-36">对当前选中的每个元素,选中其后代中第一个</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select("#selectionSelectAll_Sample")
        .select("dl").selectAll("dd")
        .style("color","red");
          </code>
        </pre>
        <div id="selectionSelectAll_Sample">
          <div>
            <dl>
              <dt>title1</dt>
              <dd>content</dd>
              <dd>content</dd>
            </dl>
            <dl>
              <dt>title2</dt>
              <dd>content</dd>
              <dd>content</dd>
            </dl>
          </div>
        </div>
      </div>

      <!-- d3.selectionEach -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionEach">selection.each(function)</div>
        <div class="lh-36">为当前选择的每个元素,调用指定的函数,这个函数可以有两个参数;d代表当前元素已绑定的数据,i代表当前元素在元素集中的索引</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //数据集
  var dataset = [1,2,3,4,5,6,7,8,9,10];
  //颜色比例尺
  var color = d3.scale.category20();
  //使用数据集添加10个圆
  var svg = d3.select("#selectionEach_Sample").append("svg");
  svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle");
  //使用each函数为每个圆设置属性
  svg.selectAll("circle")
      .each(function(d){
        d3.select(this).attr({
          cx: function(d) {return 20 * d},
          cy: 50,
          r: function(d) {return 3 * d},
          fill: color(d)
        })
      })
          </code>
        </pre>
        <div id="selectionEach_Sample">
        </div>
      </div>

      <!-- d3.selectionCall -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionCall">selection.call(function[,arguments...])</div>
        <div class="lh-36">调用指定的函数一次,函数入参是当前的选择以及任何可选参数</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //定义色彩填充方法
  function fill(ele, fill) {
    this.style("fill", fill)
  }
  //使用call函数调用fill函数填充颜色
  rect.call(fill, "orange");
  circle.call(fill, "tomato");
          </code>
        </pre>
        <div id="selectionCall_Sample">
        </div>
      </div>

      <!-- d3.selectionEmpty selectionNode selectionSize -->
      <div class="margint50 marginb20">
        <div class="fs-22 text-black" id="selectionEmpty">selection.empty()</div>
        <div class="lh-36">如果当前选择为空,则返回true</div>
        <div class="fs-22 text-black" id="selectionNode">selection.empty()</div>
        <div class="lh-36">返回当前选择的第一个非空的元素</div>
        <div class="fs-22 text-black" id="selectionSize">selection.empty()</div>
        <div class="lh-36">返回在当前选择的元素的总个数</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  &lt;p&gt; Paragraph 1 &lt;/p&gt;
  &lt;p&gt; Paragraph 2 &lt;/p&gt;
  &lt;p&gt; Paragraph 3 &lt;/p&gt;
  &lt;script&gt;
    var paragraphs = d3.selectAll("p");
    console.log( paragraphs.empty() );    //false
    console.log( paragraphs.node() );     //&lt;p&gt; Paragraph 1 &lt;/p&gt;
    console.log( paragraphs.size() );     //3
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
    },
    selectionProperty:function(){
      var d3 = this.d3;
      d3.select("#text-id")
        .property('value',function(){
          return d3.select(this).property('id');  //获取id属性的值
        });
      d3.select("#checkbox-id")
        .property('checked',true);       //设置复选框的checked属性
    },
    selectionText:function(){
      var d3 = this.d3;
      d3.select("#selectionText_Sample")
        .text("selection.text([value])");   //设置元素的文本
      d3.select("#selectionText_Sample")
        .text(function(){
          return "new text: "+d3.select(this).text();
        });   //设置元素的文本
    },
    selectionHtml:function(){
      var d3 = this.d3;
      d3.select("#selectionHtml_Sample")
        .html("<h1>hello, this is h1</h1>");   //设置innerHTML的内容
      d3.select("#selectionHtml_Sample")
        .html(function(d,i){    //用函数设置innerHTML的内容
          var old = d3.select(this).html();   //获取innerHTML的内容
          var newHtml = old + "<h2>hello, I am h2</h2>"
          return newHtml;
        });
    },
    selectionAppend:function(){
      var d3 = this.d3;
      //向#selectionAppend_Sample标签追加子元素svg
      var svg = d3.select("#selectionAppend_Sample").append("svg").attr({
        "height":50
      })
      //向svg元素追加有svg命名空间的rect子元素
      svg.append("svg:rect")
          .attr({
            "x":10,
            "y":10,
            "width":100,
            "height":40,
            "fill":"orange"
          })
    },
    selectionInsert:function(){
      var d3 = this.d3;
      //向#selectionAppend_Sample标签追加子元素svg
      var svg = d3.select("#selectionInsert_Sample").append("svg").attr({
        "height":100
      })
      //向svg中追加子元素rect
      svg.insert("rect")
          .attr({
            "x":10,
            "y":60,
            "width":100,
            "height":40,
            "fill":"orange"
          });
      //在svg中的rect子元素前增加circle元素
      svg.insert("circle", "rect")
          .attr({
            "cx":60,
            "cy":35,
            "r":25,
            "fill":"blue"
          });
    },
    selectionEnter:function(){
      var d3 = this.d3;
      //向#selectionAppend_Sample标签追加子元素svg
      var svg = d3.select("#selectionEnter_Sample").append("svg").attr({
        "height":90
      })
      var data = ["text1", "text2", "text3", "text4"];
      var update_selection = svg.selectAll('text')
                  .data(data)
                  .enter()
                  .append("text").attr({
                    x: '20',
                    y: function(d, i){return 20 + 20 * i;},
                    fill: 'green'
                  })
                  .text(function (d, i) {return d;})
    },
    selectionExit:function(){
      var d3 = this.d3;
      //向#selectionExit_Sample标签追加子元素svg
      var svg = d3.select("#selectionExit_Sample")
      var data = [1, 2, 3, 4, 5, 6];
      var update_selection = svg.selectAll('div')
                  .data(data)
                  .enter()
                  .append("div")
                  .text(function (d) {return d;});
      var exitSvg = svg.selectAll("div")
                  .data([7, 8, 9, 5, 6], function(d) {return d;})
      exitSvg.enter()
              .append("div")
              .text(function(d) {return d;})
      exitSvg.exit().remove()
    },
    selectionFilter:function(){
      var d3 = this.d3;
      //向#selectionFilter_Sample标签追加子元素svg
      var svg = d3.select("#selectionFilter_Sample").append("svg").attr({
        "height":90
      })
      var data = ["text1", "text2", "text3", "text4"];
      var filter_selection = svg.selectAll('text')
                  .data(data)
                  .enter()
                  .append("text").attr({
                    x: '20',
                    y: function(d, i){return 20 + 20 * i;}
                  })
                  .text(function (d, i) {return d;})
      filter_selection.filter(function(d, i){
        return i % 2 == 0;
      }).style("fill", "orange")
    },
    selectionDatum:function(){
      var d3 = this.d3;
      var svg = d3.select("#selectionDatum_Sample").selectAll("div")
                  .datum(function(){
                    return this.dataset;
                  })
                  .text(function(d){
                    return d.username;
                  })
    },
    selectionSort:function(){
      var d3 = this.d3;
      //向#selectionSort_Sample标签追加子元素svg
      var svg = d3.select("#selectionSort_Sample").append("svg").attr({
        "height":90
      })
      var data = [4, 1, 2, 3];
      var sort_selection = svg.selectAll("text")
                  .data(data)
                  .enter()
                  .append("text").attr({
                    x: '20',
                    y: function(d, i){return 20 + 20 * i;}
                  })
                  .text(function (d, i) {return d;})
      sort_selection.sort(function(a,b){
          return a - b
        })
        .attr({
          x: '20',
          y: function(d, i){return 20 + 20 * i;}
        })
        .text(function (d, i) {return d;})
    },
    selectionOn:function(){
      var d3 = this.d3;
      //向#selectionOn_Sample标签追加子元素svg
      var svg = d3.select("#selectionOn_Sample").append("svg").attr({
        "height":90
      })
      var data = [
        {"name":"old","value":1},
        {"name":"old","value":2},
        {"name":"old","value":3},
        {"name":"old","value":4},
        {"name":"old","value":5}
      ];
      var on_selection = svg.selectAll("text")
          .data(data)
          .enter()
          .append("text").attr({
            x: '20',
            y: function(d, i){return 20 + 20 * i;}
          })
          .text(function (d, i) {return d.name + ":" + d.value;})
      d3.select(".on_btn").on("click", function(){
        on_selection.text(function(d,i){
          return "new:" + d.value*3
        })
      });
    },
    d3Mouse:function(){
      var d3 = this.d3;
      //向#selectionOn_Sample标签追加子元素svg
      var svg = d3.select("#d3Mouse_Sample").append("svg").attr({
        "height":90
      })
      var text1=svg.append('text')
        .attr({
          x: 0,
          y: 50
        });
      // var text2=svg.append('text')
      //   .attr({
      //     x: 0,
      //     y: 30
      //   });
      svg.on("mousemove",function(d, i){
        //取得鼠标位置相对于body元素的偏移坐标
        var pos1 = "d3.mouse pos: " + d3.mouse(d3.select("body")[0][0]);
        // var pos2 = "d3.event pos: " + d3.event.offsetX + "," + d3.event.offsetY;
        text1.text(pos1);
        // text2.text(pos2);
      })
    },
    selectionTransition:function(){
      var d3 = this.d3;
      //向#selectionTransition_Sample标签追加子元素svg
      var svg = d3.select("#selectionTransition_Sample").append("svg");
      svg.append("circle")
          .attr({
            cx:50,
            cy:50,
            r:40,
            fill:"orange"
          })
      d3.select("#selectionTransition_Sample").on("click", function(){
        svg.select("circle")
          .transition()
          .attr("fill","blue")
      })
    },
    selectionSelect:function(){
      var d3 = this.d3;
      var svg = d3.select("#selectionSelect_Sample")
                  .selectAll("dl").select("dt")
                  .style("color","red");
    },
    selectionSelectAll:function(){
      var d3 = this.d3;
      var svg = d3.select("#selectionSelectAll_Sample")
                  .select("dl").selectAll("dd")
                  .style("color","red");
    },
    selectionEach:function(){
      var d3 = this.d3;
      //数据集
      var dataset = [1,2,3,4,5,6,7,8,9,10];
      //颜色比例尺
      var color = d3.scale.category20();
      //使用数据集添加10个圆
      var svg = d3.select("#selectionEach_Sample").append("svg").attr("height","90");
      svg.selectAll("circle")
          .data(dataset)
          .enter()
          .append("circle");
      //使用each函数为每个圆设置属性
      svg.selectAll("circle")
          .each(function(d){
            d3.select(this).attr({
              cx: function(d) {return 20 * d},
              cy: 50,
              r: function(d) {return 3 * d},
              fill: color(d)
            })
          })
    },
    selectionCall:function(){
      var d3 = this.d3;
      var svg = d3.select("#selectionCall_Sample").append("svg")
      var circle = svg.append("circle")
          .attr({
            cx: 100,
            cy: 70, 
            r: 40
          });
      var rect = svg.append("rect")
          .attr({
            x: 10,
            y: 20,
            width: 40,
            height: 100
          });
      //定义色彩填充方法
      function fill(ele, fill) {
        this.style("fill", fill)
      }
      //使用call函数调用fill函数填充颜色
      rect.call(fill, "orange");
      circle.call(fill, "tomato");
    }
  },
  ready:function(){
    this.selectionAttr();
    this.selectionClassed();
    this.selectionStyle();
    this.selectionProperty();
    this.selectionText();
    this.selectionHtml();
    this.selectionAppend();
    this.selectionInsert();
    this.selectionEnter();
    this.selectionExit();
    this.selectionFilter();
    this.selectionDatum();
    this.selectionSort();
    this.selectionOn();
    this.d3Mouse();
    this.selectionTransition();
    this.selectionSelect();
    this.selectionSelectAll();
    this.selectionEach();
    this.selectionCall();
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
