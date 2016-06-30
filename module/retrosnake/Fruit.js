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