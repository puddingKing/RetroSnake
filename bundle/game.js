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

		//data...
		var color = {
			bgColor:'#9BCD9B'
		}

		//paint background
		bG(ctx,color.bgColor,width,height);

	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	function bG(ctx,color,w,h){
		ctx.save();
		ctx.fillStyle = color;
		ctx.clearRect(0,0,w,h);
		ctx.fillRect(0,0,w,h);
		ctx.restore();
		// ctx.save();
		// ctx.fillStyle = 'white';
		// ctx.globalAlpha = 0.1;
		// for (var i = 0; i < 20; i++) {
		// 	ctx.beginPath();
		// 	ctx.arc(w/2,h/2,20+20*i,0,Math.PI*2,true);
		// 	ctx.fill();
		// }
		// ctx.restore();
	}
	module.exports = bG;

/***/ }
/******/ ]);