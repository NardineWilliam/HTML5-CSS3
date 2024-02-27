let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//draw triangle
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150, 300);
ctx.lineTo(30, 300);
ctx.closePath();

ctx.fillStyle = "red";
ctx.fill();

ctx.lineWidth = 3;
ctx.strokeStyle = "red";
ctx.stroke();

//draw letters a,b,c
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("a", 80, 320);
ctx.fillText("b", 160, 210);
ctx.fillText("c", 60, 210);
