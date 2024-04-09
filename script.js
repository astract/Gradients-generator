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
