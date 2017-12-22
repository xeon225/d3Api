window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
import * as d3 from 'assets/d3.js';
// import * as d3 from 'assets/d3.v4.js';

import 'assets/CMUI.css'; //样式文件
// import Vue from 'vue';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/zenburn.css'; //样式文件
// Vue.directive('highlight',function (el) {
//   let blocks = el.querySelectorAll('pre code');
//   blocks.forEach((block)=>{
//     hljs.highlightBlock(block)
//   })
// })

import dataApi from 'assets/data.json'; //样式文件





var Rxports = {
	d3,dataApi
	// cmuiData,cmuiCls,htmlcssNavData,cssClassData
};

module.exports = Rxports

