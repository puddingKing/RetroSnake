function bG(ctx,w,h,i,g,b){
	ctx.save();
	ctx.clearRect(0,0,w,h);
	ctx.fillStyle = 'rgba('+i+','+g+','+b+',1)';
	ctx.fillRect(0,0,w,h);
	ctx.restore();
}
module.exports = bG;