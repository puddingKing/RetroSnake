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
		var GameInit = __webpack_require__(2);
		var Fruit = __webpack_require__(3);

		var foodField = document.getElementById('FoodField');
		var width = foodField.width;
		var height = foodField.height;
		var ctx = foodField.getContext('2d');
		var fruit = new Fruit(ctx,width,height);
		foodField = null;

		function anim(){
			bG(ctx,width,height);
			fruit.exist();
			retrosnake.move();
			if (retrosnake.head.x == fruit.x && retrosnake.head.y == fruit.y) { //snake eat the fruit
				fruit.init();
				retrosnake.grow();
			}
			if (retrosnake.head.x > 49 || retrosnake.head.y > 49 || retrosnake.head.x < 0 || retrosnake.head.y < 0) { //snake hit the wall
				document.getElementById("over").style.display = "block"; //remind you game over
			}else if(hitSelf()){
				document.getElementById("over").style.display = "block"; 
			}else{
				setTimeout(anim,100);
			}
			// window.requestAnimationFrame(anim);
		}
		//paint background
		var retrosnake = GameInit(ctx,width,height,fruit);
		anim();

		document.onkeydown = function(event){
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if (e && e.keyCode == 38) { //up
				retrosnake.dir = 0;
			}
			if (e && e.keyCode == 39) { //right
				retrosnake.dir = 1;
			}
			if (e && e.keyCode == 40) { //down
				retrosnake.dir = 2;
			}
			if (e && e.keyCode == 37) { //left
				retrosnake.dir = 3;
			}
		}
		function hitSelf(){
			var hitself = false;
			for (var i = 0; i < retrosnake.body.length; i++) {
				if(retrosnake.body[i].x == retrosnake.head.x && retrosnake.body[i].y == retrosnake.head.y){
					hitself = true;
				}
			}
			return hitself;
		}
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	function bG(ctx,w,h){
		ctx.save();
		ctx.clearRect(0,0,w,h);
		ctx.fillStyle = 'rgba(0,0,0,1)';
		ctx.fillRect(0,0,w,h);
		ctx.restore();
	}
	module.exports = bG;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var retroSnake = __webpack_require__(4);
	var bG = __webpack_require__(1);

	var GameInit = function(ctx,width,height,fruit){
		var retrosnake = new retroSnake(ctx,width,height);
		bG(ctx,width,height);
		fruit.init();
		retrosnake.init();
		return retrosnake;
	}
	module.exports = GameInit;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function fruit(ctx,width,height){
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.x;
		this.y;
	}
	fruit.prototype.init = function(){
		var fruitCoor = {
			x:Math.floor(Math.random()*49),
			y:Math.floor(Math.random()*49)
		};
		var ctx = this.ctx;
		ctx.save();
		ctx.fillStyle = "#FF7F24";
		this.x = fruitCoor.x;
		this.y = fruitCoor.y;
		ctx.beginPath();
		ctx.arc(this.x*10+5,this.y*10+5,4,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
	fruit.prototype.exist = function(){
		var ctx = this.ctx;
		ctx.save();
		ctx.fillStyle = "#FF7F24";
		ctx.arc(this.x*10+5,this.y*10+5,4,0,2*Math.PI);
		// ctx.fillRect(this.x*10,this.y*10,10,10);
		ctx.fill();
		ctx.restore();
	}
	module.exports = fruit;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var retroSnake = (function(){
		function retroSnake(ctx,width,height){
			this.ctx = ctx;
			this.width = width;
			this.height = height;
			this.head = [];
			this.body = [];
			this.dir;
			this.tail;
		}
		retroSnake.prototype.init = function(){
			var ctx = this.ctx;
			this.head = {x:24,y:24};
			this.body = [{x:25,y:24}];
			this.dir = 0;
			ctx.save();
			ctx.fillStyle = "#7CCD7C";
			ctx.fillRect(this.head.x*10+1,this.head.y*10+1,8,8);
			for (var i = 0; i < this.body.length; i++) {
				var x = this.body[i].x;
				var y = this.body[i].y;
				ctx.fillRect(x*10+2,y*10+2,6,6);
			}
			ctx.restore();
		}
	 // 17 keyCode 37 = Left
	 // 18 keyCode 38 = Up
	 // 19 keyCode 39 = Right
	 // 20 keyCode 40 = Down
		retroSnake.prototype.move = function(){
			var ctx = this.ctx;
			this.tail = this.body[this.body.length-1];
			for (var i = this.body.length-1; i > 0; i--) {
				this.body[i] = this.body[i-1];
			}
			this.body[0] = this.head;

			switch(this.dir){
				case 0:
					this.head = {x:this.head.x,y:this.head.y-1};
					break;
				case 1:
					this.head = {x:this.head.x+1,y:this.head.y};
					break;
				case 2:
					this.head = {x:this.head.x,y:this.head.y+1};
					break;
				case 3:
					this.head = {x:this.head.x-1,y:this.head.y};
					break;
			}
			ctx.save();
			ctx.fillStyle = "#7CCD7C";
			ctx.fillRect(this.head.x*10+1,this.head.y*10+1,8,8);
			for (var i = 0; i < this.body.length; i++) {
				var x = this.body[i].x;
				var y = this.body[i].y;
				ctx.fillRect(x*10+2,y*10+2,6,6);
			}
			ctx.restore();
		}
		retroSnake.prototype.grow = function(){
			var ctx = this.ctx;
			this.body.push(this.tail);
			ctx.save();
			ctx.fillStyle = "#7CCD7C";
			ctx.fillRect(this.tail.x+2,this.tail.y+2,6,6);
			ctx.restore();
		}
		return retroSnake;
	})();
	module.exports = retroSnake;

/***/ }
/******/ ]);