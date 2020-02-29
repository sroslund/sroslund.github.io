const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

const sprite = new Image();
sprite.src = "flap/monkaS.png";

const bird = {
	x: 50,
	y: 150,
	draw : function(){
		ctx.drawImage(sprite,this.x,this.y);
	}

}

function draw(){
	ctx.fillStyle = "#70c5ce";
	ctx.fillRect(0,0,cvs.width,cvs.height);
	bird.draw();
}

function loop(){

	draw();  
  
}
loop();
