const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
/*
ctx.fillStyle = 'blue';
ctx.fillRect(200,200,100,100);

canvas.addEventListener("click", birb.jump);
*/


const birb = {
	x: 10,
	y: 10,
	dy: -1,
	grav: .25,

	draw : function(){
		ctx.fillStyle = 'red';
		ctx.fillRect(0,0,1000,700)
		ctx.fillStyle = 'yellow';
		ctx.fillRect(this.x,this.y,100,100);
	},
	
	update : function(){
		this.dy = this.dy - this.grav
		this.y = this.y - this.dy;
	},
	
	jump : function(){
		this.dy = 8;
	}
}

function loop(){
	canvas.addEventListener("click", birb.jump() { }, false);
	birb.draw();
	birb.update();
	requestAnimationFrame(loop);
}

loop();