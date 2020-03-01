const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

var img = document.getElementById("monkaS");
ctx.drawImage(img,10,10)

/*
const sprite = new Image();
sprite.src = "flap/monkaS.png";




const bird = {
	x: 50,
	y: 150,
	draw : function(){
		ctx.drawImage(sprite,this.x,this.y);
	}

bird.draw();
ctx.font = "30px Arial";
ctx.fillText("Hi Scott!", 100, 100);*/
/*
function draw(){
//	ctx.fillStyle = "#70c5ce";
//	ctx.fillRect(0,0,cvs.width,cvs.height);
	bird.draw();
	ctx.font = "30px Arial";
	ctx.fillText("Hello World", 10,50);
	ctx.fillStyle = '#70c5ce";
	ctx.fillRect(0,0,cvs.width,cvs.height);
}

function loop(){

	draw();  
  
}
loop();*/
