/*
// Create a function for make gradient for background
function createGradientByRGB() {
  let root = document.querySelector(":root");

  let rColor; // Red color
  let gColor; // Green color
  let bColor; // Blue color
  let arrayColors = []; // array for save two color values

  for (let i = 0; i < 2; i++) {
    // generate random value for RGB system in 16 code system
    rColor = Math.floor(Math.random() * 255).toString(16);
    gColor = Math.floor(Math.random() * 255).toString(16);
    bColor = Math.floor(Math.random() * 255).toString(16);

    // check color value on one symbols and add 0 before
    if (rColor.length == 1) {
      rColor = 0 + rColor;
    }

    if (gColor.length == 1) {
      gColor = 0 + gColor;
    }

    if (bColor.length == 1) {
      bColor = 0 + bColor;
    }

    arrayColors.push(rColor + gColor + bColor);
  }

  root.style.setProperty("--color_top", "#" + arrayColors[0]);
  root.style.setProperty("--color_bottom", "#" + arrayColors[1]);

  color_value_top.innerHTML = arrayColors[0];
  color_value_bottom.innerHTML = arrayColors[1];
  return arrayColors; // возвращает два хекс значения
}
 */

function generateHexCode() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomHex.padStart(6, "0");
}

// Function to generate an array with two hex codes
function generateHexCodeArray() {
  return [generateHexCode(), generateHexCode()];
}

function applyColorsToCSS() {
  let color1 = generateHexCodeArray()[0];
  let color2 = generateHexCodeArray()[1];
  let root = document.querySelector(":root");
  root.style.setProperty("--color_top", color1);
  root.style.setProperty("--color_bottom", color2);
  console.log("Color1: " + color1, "Color2: " + color2);
}

// Click on Hex value for copy value
function copyHexValue(id) {
  navigator.clipboard
    .writeText(document.getElementById(id).textContent)
    .then(() => {
      let setValue = document.getElementById(id).textContent;
      document.getElementById(id).innerHTML = "Copied";
      setTimeout(function () {
        document.getElementById(id).innerHTML = setValue;
      }, 300);
    })
    .catch((err) => {
      let setValue = document.getElementById(id).textContent;
      document.getElementById(id).innerHTML = "Ooops.. Please retry";
      setTimeout(function () {
        document.getElementById(id).innerHTML = setValue;
      }, 1000);
    });
}

/*
// функция возвращает хекс код
function generateHEXCode() {
  let redColor;
  let greenColor;
  let blueColor;

  redColor = Math.floor(Math.random() * 255).toString(16);
  if (redColor.length == 1) {
    redColor = 0 + redColor;
  }

  greenColor = Math.floor(Math.random() * 255).toString(16);
  if (greenColor.length == 1) {
    greenColor = 0 + greenColor;
  }

  blueColor = Math.floor(Math.random() * 255).toString(16);
  if (blueColor.length == 1) {
    blueColor = 0 + blueColor;
  }

  return (hexCode = redColor + greenColor + blueColor);
}
*/
