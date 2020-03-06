const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'blue';
ctx.fillRect(200,200,100,100);

const birb = {
	x: 10,
	y: 10,
	dy: -1,
	grav: .5,

	draw : function(){
		ctx.fillStyle = 'red';
		ctx.fillRect(0,0,1000,700)
		ctx.fillStyle = 'yellow';
		ctx.fillRect(this.x,this.y,100,100);
	},
	
	update : function(){
		this.dy = this.dy - this.grav
		this.y = this.y - this.dy;
	}
}

function loop(){
	birb.draw();
	birb.update();
	requestAnimationFrame(loop);
}

loop();