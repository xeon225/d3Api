<template>
  <div class="">
    <div class="lh-40 borderb padding20 fs-28 text-black">{{ msg }}</div>
    <div class="padding20">
      <!-- transition.delay() & transition.duration() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionDelay">transition.delay([delay])</div>
        <div class="lh-36">指定过度的延迟时间</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.selectAll("rect")
    .transition() //开启动画
    .delay(function(d,i){  //设置延迟时间
      return i * 500;
    })
    .attr('transform','rotate(45)')
          </code>
        </pre>
        <div id="transitionDelay_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionDelay('#transitionDelay_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.duration() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionDuration">transition.duration([duration])</div>
        <div class="lh-36">指定过度选择中的每个元素的持续时间</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.selectAll("rect")
    .transition() //开启动画
    .duration(2000)   //设置动画持续时间2000ms
    .delay(function(d,i){  //设置延迟时间
      return i * 500;
    })
    .attr('transform','rotate(45)')
          </code>
        </pre>
        <div id="transitionDuration_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionDelay('#transitionDuration_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.ease() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionEase">transition.ease(value[,arguments])</div>
        <div class="lh-36">指定过度的缓动函数</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.selectAll('circle').attr('r', 1e-6)    //设置圆初始半径
    .transition().duration(2000)      
    .ease(Math.sqrt)      //指定缓动函数为Math对象的平方根函数
    .attr('r',50)
          </code>
        </pre>
        <div id="transitionEase_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionEase('#transitionEase_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.attr() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionAttr">transition.attr(name,value)</div>
        <div class="lh-36">设置指定名称的属性过渡结束时的值为value</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.selectAll('circle').attr('r', 1e-6)
    .transition().duration(2000)      
    .ease(Math.sqrt)
    //设置圆动画结束时填充色为green
    .attr({
      r:50,
      fill:"green"
    })
          </code>
        </pre>
      </div>
      <!-- transition.attrTween() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionAttrTween">transition.attrTween(name,tween)</div>
        <div class="lh-36">用指定的补间(tween)函数,过渡指定属性的值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.select('circle')
    .transition()
    .duration(2000)
    .attrTween('r', tween)    //对半径属性调用自定义的补间函数

  function tween(d, i, a){
    return d3.interpolateNumber(a, 2*a);
  }
          </code>
        </pre>
        <div id="transitionAttrTween_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionEase('#transitionAttrTween_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.style() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionStyle">transition.style(name,value[,priority])</div>
        <div class="lh-36">设置指定名称的样式过渡结束时的值为value</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select(selectId).selectAll("svg")
    .style("background-color","black")
    .transition()
      .duration(1000)
    .style("background-color","red")
          </code>
        </pre>
        <div id="transitionStyle_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionStyle('#transitionStyle_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.styleTween() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionStyleTween">transition.styleTween(name,tween[,priority])</div>
        <div class="lh-36">用指定的补间函数,过渡指定的css样式的值</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  d3.select(selectId).selectAll("svg")
    .transition()
    .duration(1000)
    .styleTween("background-color", tween)

  function tween(d, i, a){
    return d3.interpolate("green", "orange")
  }
          </code>
        </pre>
        <div id="transitionStyleTween_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionStyle('#transitionStyleTween_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.text() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionText">transition.text(value)</div>
        <div class="lh-36">文本(text)操作符是基于textContent属性的</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  //先创建一个文本元素,并设置内容为"Haha"
  svg.append('text')
      .attr({
        x: 50,
        y: 50
      }).text("Haha")
  //设置过渡开始后元素的文本,取代原有的子元素
  svg.select('text')
      .transition()
      .duration(1500)     //开启动画
      .attr({             //设置动画持续时间1500ms
        x: 100,
        y: 100
      }).text("Oh, yeah") //设置过渡开始后元素的文本内容为"OH, yeah"
          </code>
        </pre>
        <div id="transitionText_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionText('#transitionText_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.tween() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionTween">transition.tween(name,factory)</div>
        <div class="lh-36">给指定的名称(属性和样式名)注册一个自定义的补间函数</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.select('text').text(10)
    .transition()
    .duration(7500)
    .tween("text", function(){
      //过渡区间为[10 ,100]
      var interpolate = d3.interpolate(d3.select(this).text(),100);
      return function(t) {d3.select(this).text(interpolate(t));};
    })
          </code>
        </pre>
        <div id="transitionTween_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionText('#transitionTween_Sample',true)">开启动画</div>
        </div>
      </div>
      <!-- transition.remove() -->
      <div class="marginb20">
        <div class="fs-22 text-black" id="transitionRemove">transition.remove()</div>
        <div class="lh-36">在过渡结束时删除选定的元素</div>
        <pre v-highlight class="flex-container marginv10">
          <code class="flex1 paddingh10">
  svg.select('text').text(10)
    .transition()
    .duration(7500)
    .tween("text", function(){
      //过渡区间为[10 ,100]
      var interpolate = d3.interpolate(d3.select(this).text(),100);
      return function(t) {d3.select(this).text(interpolate(t));};
    })
          </code>
        </pre>
        <div id="transitionRemove_Sample" class="flex-container left top">
          <div class="btn small radius reverse marginr20" @click="transitionRemove('#transitionRemove_Sample',true)">开启动画</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Lib from 'assets/Lib.js';

export default {
  data() {
    return {
      msg: 'Transition 过渡'
    }
  },
  components: {

  },
  computed: {
    d3: function() {
      return Lib.d3
    }
  },
  methods: {
    transitionDelay: function(id, start) {
      var d3 = this.d3;
      var selectId = id;
      if (!start) {
        var svg = d3.select(selectId).append("svg");
        for (var i = 0; i < 10; i++) {
          svg.append("rect")
            .attr({
              x: 20 + 15 * i,
              y: 10,
              width: 10,
              height: 10,
              fill: "orange"
            })
        }
      } else {
        d3.select(selectId).selectAll("svg").remove()
        var svg = d3.select(selectId).append("svg")
        for (var i = 0; i < 10; i++) {
          svg.append("rect")
            .attr({
              x: 20 + 15 * i,
              y: 10,
              width: 10,
              height: 10,
              fill: "orange"
            })
        }
        if (selectId == '#transitionDuration_Sample') {
          svg.selectAll("rect")
            .transition() //开启动画
            .duration(2000) //设置动画持续时间2000ms
            .delay(function(d, i) { //设置延迟时间
              return i * 500;
            })
            .attr('transform', 'rotate(45)')
        } else {
          svg.selectAll("rect")
            .transition() //开启动画
            .delay(function(d, i) { //设置延迟时间
              return i * 500;
            })
            .attr('transform', 'rotate(45)')
        }
      }
    },
    transitionEase: function(id, start) {
      var d3 = this.d3;
      var selectId = id;
      if (!start) {
        var svg = d3.select(selectId).append("svg");
        for (var i = 0; i < 2; i++) {
          svg.append('circle')
            .attr({
              cx: 50 + i * 150,
              cy: 50,
              r: 20
            });
        }
      } else {
        d3.select(selectId).selectAll("svg").remove()
        var svg = d3.select(selectId).append("svg")
        for (var i = 0; i < 2; i++) {
          svg.append('circle')
            .attr({
              cx: 50 + i * 150,
              cy: 50,
              r: 20
            });
        }
        if (selectId == '#transitionEase_Sample') {
          svg.selectAll('circle').attr('r', 1e-6) //设置圆初始半径
            .transition().duration(2000)
            .ease(Math.sqrt) //指定缓动函数为Math对象的平方根函数
            .attr({
              'r': 50,
              fill: "green"
            })
        } else {
          svg.select('circle')
            .transition()
            .duration(2000)
            .attrTween('r', tween) //对半径属性调用自定义的补间函数

          function tween(d, i, a) {
            return d3.interpolateNumber(a, 2 * a);
          }

        }

      }
    },
    transitionAttr: function() {
      var d3 = this.d3;
      var svg = d3.select("#transitionEase_Sample").append("svg");
      for (var i = 0; i < 2; i++) {
        svg.append('circle')
          .attr({
            cx: 50 + i * 150,
            cy: 50,
            r: 50,
            fill: 'orange'
          });
      }
      svg.selectAll('circle').attr('r', 1e-6) //设置圆初始半径
        .transition().duration(2000)
        .ease(Math.sqrt) //指定缓动函数为Math对象的平方根函数
        .attr('r', 50)
    },
    transitionStyle: function(id, start) {
      var d3 = this.d3;
      var selectId = id;
      if (!start) {
        d3.select(selectId).append("svg")
          .style("background-color", "black")
      } else {
        if (selectId == '#transitionStyle_Sample') {
          d3.select(selectId).selectAll("svg")
            .style("background-color", "black")
            .transition()
            .duration(1000)
            .style("background-color", "red")
        } else {
          d3.select(selectId).selectAll("svg")
            .transition()
            .duration(1000)
            .styleTween("background-color", tween)

          function tween(d, i, a) {
            return d3.interpolate("green", "orange")
          }
        }

      }
    },
    transitionText: function(id, start) {
      var d3 = this.d3;
      var selectId = id;
      if (!start) {
        var svg = d3.select(selectId).append("svg")
        //先创建一个文本元素,并设置内容为"Haha"
        svg.append('text')
          .attr({
            x: 50,
            y: 50
          }).text(10)
        if (selectId == '#transitionText_Sample') {
          svg.select('text')
            .text("Haha")
        }
      } else {
        if (selectId == '#transitionText_Sample') {
          var svg = d3.select(selectId).select("svg")
          //设置过渡开始后元素的文本,取代原有的子元素
          svg.select('text')
            .transition()
            .duration(1500) //开启动画
            .attr({ //设置动画持续时间1500ms
              x: 100,
              y: 100
            }).text("Oh, yeah") //设置过渡开始后元素的文本内容为"OH, yeah"
        } else {
          var svg = d3.select(selectId).select("svg")
          svg.select('text').text(10)
            .transition()
            .duration(7500)
            .tween("text", function(){
              //过渡区间为[10 ,100]
              var interpolate = d3.interpolate(d3.select(this).text(),100);
              return function(t) {d3.select(this).text(interpolate(t));};
            })
        }

      }
    },
    transitionRemove: function(id, start) {
      var d3 = this.d3;
      var selectId = id;
      if (!start) {
        var svg = d3.select(selectId).append("svg")
        svg.append('circle')
          .attr({
            cx: 50,
            cy: 50,
            r: 40
          })
      } else {
        var svg = d3.select(selectId).select("svg")
        svg.selectAll('circle')
          .transition()
          .duration(1500)
          .attr('r', 0)
          .remove()
      }
    }
  },
  ready: function() {
    this.transitionDelay('#transitionDelay_Sample');
    this.transitionDelay('#transitionDuration_Sample');
    this.transitionEase('#transitionEase_Sample');
    this.transitionEase('#transitionAttrTween_Sample');
    this.transitionStyle('#transitionStyle_Sample');
    this.transitionStyle('#transitionStyleTween_Sample');
    this.transitionText('#transitionText_Sample');
    this.transitionText('#transitionTween_Sample');
    this.transitionRemove('#transitionRemove_Sample');
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
