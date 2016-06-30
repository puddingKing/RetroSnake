(function() {
	// body...
	var bG = require("../module/retrosnake/background");
	var GameInit = require("../module/retrosnake/GameInit");
	var Fruit = require("../module/retrosnake/Fruit");
	var Score = require("../module/retrosnake/score");

	var foodField = document.getElementById('FoodField');
	var width = foodField.width;
	var height = foodField.height;
	var ctx = foodField.getContext('2d');
	var fruit = new Fruit(ctx,width,height);
	var score = new Score(ctx,width,height);
	foodField = null;

	function anim(){
		bG(ctx,width,height);
		score.init();
		fruit.exist();
		retrosnake.move();
		if (retrosnake.head.x == fruit.x && retrosnake.head.y == fruit.y) { //snake eat the fruit
			score.score += 50;
			fruit.init();
			retrosnake.grow();
		}
		if (retrosnake.head.x > 49 || retrosnake.head.y > 49 || retrosnake.head.x < 0 || retrosnake.head.y < 0) { //snake hit the wall
			document.getElementById("over").style.display = "block"; //remind you game over
		}else if(hitSelf()){
			document.getElementById("over").style.display = "block"; 
		}else{
			setTimeout(anim,200);
		}
		// window.requestAnimationFrame(anim);
	}
	//paint background
	var retrosnake = GameInit(ctx,width,height,fruit);
	score.init();
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