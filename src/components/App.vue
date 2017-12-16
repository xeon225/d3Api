<template>
  <div id="app">
    <div class="mp3">
    
    </div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js'
export default {
  components: {
  },
  computed:{
    d3:function(){
      return Lib.d3
    }
  },
  methods: {
    scalePow:function(){
      var d3 = this.d3;
      var pow = d3.scalePow()
                .domain([0,3])
                .range([0,90]);
      console.log(pow(1))
    },
    scaleLinear:function(){
      var d3 = this.d3;
      var linear = d3.scaleLinear()
                .domain([-10,20])
                .rangeRound([0,100])
      var ticks = linear.ticks(5);
      var tickFormat = linear.tickFormat(5,"+")
      console.log(ticks)
      for(var i=0;i<ticks.length;i++){
        ticks[i] = tickFormat(ticks[i])
      }
      console.log(ticks);

      var scale = d3.scaleLinear();
      scale.domain([0,10,40])
            .range([0,100,150]);
      console.log(scale(1))
    },
    mp3:function(){
      var mp3 = this.d3.select(".mp3").selectAll("a");
      var mp3Data = mp3._groups[0];

      mp3.data(mp3Data)
          // .each(function(d,i){
            // console.log(d.title)
            // mp3.attr("title",'http://tingmp3.520tingshu.com/玄幻奇幻/吞噬星空/'+d.title+'.mp3')
            // .text('http://tingmp3.520tingshu.com/玄幻奇幻/吞噬星空/'+d.title+'.mp3')
          // })
          // .text(function(d,i){
          //   return 'http://tingmp3.520tingshu.com/玄幻奇幻/吞噬星空/'+d.title+'.mp3'
          // })
    }
  },
  ready:function(){
      //this.scaleLinear();
      this.scalePow();
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
