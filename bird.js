const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

const sprite = new Image();
sprite.src = "flap/monkaS.png";

function draw(){
	ctx.fillStyle = "#70c5ce";
	ctx.fillRect(0,0,cvs.width,cvs.height);
	ctx.drawImage(sprite,10,10);
}

function loop(){

	draw();  
  
}
loop();
