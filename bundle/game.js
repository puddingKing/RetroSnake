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

	var bG = __webpack_require__(1);

	(function() {
		// body...
		var foodField = document.getElementById('FoodField');
		var width = foodField.width;
		var height = foodField.height;
		var ctx = foodField.getContext('2d');
		var r = 1;
		var g = 255;
		var b = 1;

		//data...
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
			bG(ctx,color.bgColor,width,height,r,g,b);
			r = (r <= 200)?(r+1):(r-1);
			g = (g >= 20)?(g-1):(g+1);
			b = (b <= 200)?(b+1):(b-1);
			window.requestAnimationFrame(bg);	
		}
		//paint background
		// var anim = window.requestAnimationFrame(bg);
		bg();
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	function bG(ctx,color,w,h,i,g,b){
		ctx.save();
		ctx.fillStyle = 'rgba('+i+','+g+','+b+',1)';
		ctx.clearRect(0,0,w,h);
		ctx.fillRect(0,0,w,h);
		ctx.restore();
	}
	module.exports = bG;

/***/ }
/******/ ]);