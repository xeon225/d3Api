window.$ = window.jQuery = require('jquery');
import $ from 'jquery';
import * as d3 from 'assets/d3.js';
// import * as d3 from 'assets/d3.v4.js';

import 'assets/CMUI.css'; //样式文件
import dataApi from 'assets/data.json'; //样式文件





var Rxports = {
	d3,dataApi
};

module.exports = Rxports

