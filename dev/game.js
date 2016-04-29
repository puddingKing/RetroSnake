var bG = require("../module/retrosnake/background");

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