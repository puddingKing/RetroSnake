var retroSnake = (function(){
	function retroSnake(ctx,width,height){
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.head = [];
		this.body = [];
		this.dir;
		this.tail;
	}
	retroSnake.prototype.init = function(){
		var ctx = this.ctx;
		this.head = {x:24,y:24};
		this.body = [{x:25,y:24}];
		this.dir = 0;
		ctx.save();
		ctx.fillStyle = "#7CCD7C";
		ctx.fillRect(this.head.x*10+1,this.head.y*10+1,8,8);
		for (var i = 0; i < this.body.length; i++) {
			var x = this.body[i].x;
			var y = this.body[i].y;
			ctx.fillRect(x*10+2,y*10+2,6,6);
		}
		ctx.restore();
	}
 // 17 keyCode 37 = Left
 // 18 keyCode 38 = Up
 // 19 keyCode 39 = Right
 // 20 keyCode 40 = Down
	retroSnake.prototype.move = function(){
		var ctx = this.ctx;
		this.tail = this.body[this.body.length-1];
		for (var i = this.body.length-1; i > 0; i--) {
			this.body[i] = this.body[i-1];
		}
		this.body[0] = this.head;

		switch(this.dir){
			case 0:
				this.head = {x:this.head.x,y:this.head.y-1};
				break;
			case 1:
				this.head = {x:this.head.x+1,y:this.head.y};
				break;
			case 2:
				this.head = {x:this.head.x,y:this.head.y+1};
				break;
			case 3:
				this.head = {x:this.head.x-1,y:this.head.y};
				break;
		}
		ctx.save();
		ctx.fillStyle = "#7CCD7C";
		ctx.fillRect(this.head.x*10+1,this.head.y*10+1,8,8);
		for (var i = 0; i < this.body.length; i++) {
			var x = this.body[i].x;
			var y = this.body[i].y;
			ctx.fillRect(x*10+2,y*10+2,6,6);
		}
		ctx.restore();
	}
	retroSnake.prototype.grow = function(){
		var ctx = this.ctx;
		this.body.push(this.tail);
		ctx.save();
		ctx.fillStyle = "#7CCD7C";
		ctx.fillRect(this.tail.x+2,this.tail.y+2,6,6);
		ctx.restore();
	}
	return retroSnake;
})();
module.exports = retroSnake;