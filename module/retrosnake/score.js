function Score(ctx,width,height){
	this.ctx = ctx;
	this.width = width;
	this.height = height;
	this.score = 0;
}
Score.prototype.init = function(){
	var ctx = this.ctx;
	ctx.save();
	ctx.font="18px Black Ops One";
	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.fillText('score:'+this.score,30,30);
	ctx.restore();
}
module.exports = Score;