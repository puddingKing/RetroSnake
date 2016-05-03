var bG = require("../module/retrosnake/background");

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
		if (r <= 200) {
			
		}
		r = (r <= 200)?(r+1):(r-1);
		g = (g >= 20)?(g-1):(g+1);
		b = (b <= 200)?(b+1):(b-1);
		window.requestAnimationFrame(bg);
	}
	//paint background
	// var anim = window.requestAnimationFrame(bg);
	bg();
})();