function bG(ctx,w,h){
	ctx.save();
	ctx.clearRect(0,0,w,h);
	ctx.fillStyle = 'rgba(0,0,0,1)';
	ctx.fillRect(0,0,w,h);
	ctx.restore();
}
module.exports = bG;