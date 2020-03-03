const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const birb = {
	x: 10,
	y: 10,
	dy: -1,

	draw : function(){
		ctx.fillStyle = 'yellow';
		ctx.fillRect(this.x,this.y,100,100);
	},
	
	update : funtion(){
		this.y = this.y - this.dy;
	}
};

birb.draw();
