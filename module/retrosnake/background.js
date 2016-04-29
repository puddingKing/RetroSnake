function bG(ctx,color,w,h){
	ctx.save();
	ctx.fillStyle = color;
	ctx.clearRect(0,0,w,h);
	ctx.fillRect(0,0,w,h);
	ctx.restore();
	// ctx.save();
	// ctx.fillStyle = 'white';
	// ctx.globalAlpha = 0.1;
	// for (var i = 0; i < 20; i++) {
	// 	ctx.beginPath();
	// 	ctx.arc(w/2,h/2,20+20*i,0,Math.PI*2,true);
	// 	ctx.fill();
	// }
	// ctx.restore();
}
module.exports = bG;