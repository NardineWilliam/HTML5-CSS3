let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//outer circle
let grad1 = ctx.createRadialGradient(250, 200, 50, 350, 200, 200);
grad1.addColorStop(0, "white");
grad1.addColorStop(1, "#0246BE");

ctx.beginPath();
ctx.arc(250, 250, 150, 0, 2 * Math.PI);
ctx.fillStyle = grad1;
ctx.fill();
ctx.closePath();

//inner circle
let grad2 = ctx.createRadialGradient(400, 300, 220, 50, 0, 200);
grad2.addColorStop(0, "white");
grad2.addColorStop(1, "#0246BE");

ctx.beginPath();
ctx.arc(250, 250, 120, 0, 2 * Math.PI);
ctx.fillStyle = grad2;
ctx.fill();
ctx.closePath();

//N letter
ctx.font = "220px Arial";
ctx.fillStyle = "white";
ctx.fillText("N", 170, 325);
