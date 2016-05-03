function bG(ctx,color,w,h,i,g,b){
	ctx.save();
	ctx.fillStyle = 'rgba('+i+','+g+','+b+',1)';
	ctx.clearRect(0,0,w,h);
	ctx.fillRect(0,0,w,h);
	ctx.restore();
}
module.exports = bG;