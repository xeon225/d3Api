<template>
  <div class="padding20">
    <div class="fs-20">{{ msg }}</div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js';

export default {
  data () {
    return {
      msg: '核心(core)'
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
    
  },
  ready:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
