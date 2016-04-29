var bG = require("../module/retrosnake/background");

(function() {
	// body...
	var foodField = document.getElementById('FoodField');
	var width = foodField.width;
	var height = foodField.height;
	var ctx = foodField.getContext('2d');

	//paint background
	bG(ctx,'black',width,height);
	
})();