// highlight.js
import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function () {
    let blocks = this.el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight