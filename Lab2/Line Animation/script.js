const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.stroke();

let lineLength = 0;

function drawLine() {
  lineLength += 4;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(lineLength, lineLength);
  ctx.strokeStyle = "red";
  ctx.stroke();

  if (lineLength < 400) {
    requestAnimationFrame(drawLine);
  }
}

drawLine();
