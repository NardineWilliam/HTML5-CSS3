const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// first gradient
const grad1 = ctx.createLinearGradient(0, 0, 0, 200);
grad1.addColorStop(0, "#1FBEFE");
grad1.addColorStop(1, "white");

ctx.fillStyle = grad1;
ctx.fillRect(0, 0, 500, 250);

// second gradient
const grad2 = ctx.createLinearGradient(0, 200, 0, 500);
grad2.addColorStop(0, "#08D30C");
grad2.addColorStop(1, "white");

ctx.fillStyle = grad2;
ctx.fillRect(0, 250, 500, 500);

// third gradient
const grad3 = ctx.createLinearGradient(0, 150, 0, 300);
grad3.addColorStop(0, "black");
grad3.addColorStop(1, "transparent");

//drawing lines
ctx.beginPath();
ctx.moveTo(150, 170);
ctx.lineTo(400, 170);
ctx.closePath();
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 170);
ctx.lineTo(150, 300);
ctx.closePath();
ctx.strokeStyle = grad3;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 170);
ctx.lineTo(400, 300);
ctx.closePath();
ctx.strokeStyle = grad3;
ctx.stroke();
