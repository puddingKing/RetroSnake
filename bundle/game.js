/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
		// body...
		var bG = __webpack_require__(1);
		var foodField = document.getElementById('FoodField');
		var width = foodField.width;
		var height = foodField.height;
		var ctx = foodField.getContext('2d');
		foodField = null;
		var r = 1;
		var g = 255;
		var b = 190;
		var state = 1;
		var color = {
			bgColor:'#9BCD9B',
			snakeColor:''
		}
		var time = {
			current:Date.now(),
			last:Date.now(),
			delta:Date.now()
		}	
		
		function bg(){
			bG(ctx,width,height,r,g,b);
			if (state == 1) {
				FangAn1();
			}else{
				FangAn0();
			}
			window.requestAnimationFrame(bg);
		}
		//paint background
		// var anim = window.requestAnimationFrame(bg);
		function FangAn1(){
			r = (r < 255)?(r+1):(255);
			g = (g > 1)?(g-1):(1);
			// b = (b > 1)?(b-1):(1);
			if(r == 255 && g == 1){
				state = 0;
			}
		}
		function FangAn0(){
			r = (r > 1)?(r-1):(1);
			g = (g < 255)?(g+1):(255);
			// b = (b < 255)?(b+1):(255);
			if(r == 1 && g == 255){
				state = 1;
			}
		}
		bg();
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	function bG(ctx,w,h,i,g,b){
		ctx.save();
		ctx.clearRect(0,0,w,h);
		ctx.fillStyle = 'rgba('+i+','+g+','+b+',1)';
		ctx.fillRect(0,0,w,h);
		ctx.restore();
	}
	module.exports = bG;

/***/ }
/******/ ]);