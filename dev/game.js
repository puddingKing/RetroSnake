(function() {
	// body...
	var bG = require("../module/retrosnake/background");
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