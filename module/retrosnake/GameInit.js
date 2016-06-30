var retroSnake = require('./retrosnake');
var bG = require('./background');

var GameInit = function(ctx,width,height,fruit){
	var retrosnake = new retroSnake(ctx,width,height);
	bG(ctx,width,height);
	fruit.init();
	retrosnake.init();
	return retrosnake;
}
module.exports = GameInit;