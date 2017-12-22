// highlight.js
import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/zenburn.css'
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function () {
  	console.log(this.el)
    let blocks = this.el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight