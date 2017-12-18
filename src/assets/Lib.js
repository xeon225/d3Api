window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
import * as d3 from 'assets/d3.js';
// import * as d3 from 'assets/d3.v4.js';
import hljs from 'highlight.js'
import 'assets/CMUI.css' //样式文件
import 'highlight.js/styles/zenburn.css' //样式文件
hljs.initHighlightingOnLoad();


var Rxports = {
	d3
	// cmuiData,cmuiCls,htmlcssNavData,cssClassData
};

module.exports = Rxports

