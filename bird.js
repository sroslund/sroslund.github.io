//var canvas = document.getElementById("myCanvas");
//var ctx = canvas.getContext("2d");
function startGame() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    img = new Image();
    img.src = "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg";
    ctx.drawImage(img,10,10);
};
