const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const colorText = document.getElementById("colorText");

function updateColor() {
  const redValue = redRange.value;
  const greenValue = greenRange.value;
  const blueValue = blueRange.value;

  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  colorText.style.color = color;
}

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);
