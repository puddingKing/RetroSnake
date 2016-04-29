function bG(ctx,color,w,h){
	ctx.save();
	ctx.fillStyle = color;
	ctx.clearRect(0,0,w,h);
	ctx.fillRect(0,0,w,h);
	ctx.restore();
}
module.exports = bG;