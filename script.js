// Create a function for make gradient for background
function createGradientByRGB() {
    let root = document.querySelector(':root');

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
        console.log(arrayColors);
    }

    root.style.setProperty('--color_top', ('#' + arrayColors[0]));
    root.style.setProperty('--color_bottom', ('#' + arrayColors[1]));

    color_value_top.innerHTML = arrayColors[0];
    color_value_bottom.innerHTML = arrayColors[1];
}

// Click on Hex value for copy value
function copyHexValue(id) {
    navigator.clipboard.writeText(document.getElementById(id).textContent)
        .then(() => {
            let setValue = document.getElementById(id).textContent;
            document.getElementById(id).innerHTML = "Copied";
            setTimeout(function () {
                document.getElementById(id).innerHTML = setValue;
            }, 300);
        })
        .catch(err => {
            let setValue = document.getElementById(id).textContent;
            document.getElementById(id).innerHTML = "Ooops.. Please retry";
            setTimeout(function () {
                document.getElementById(id).innerHTML = setValue;
            }, 1000);
        });
}

function createGradientByHSL() {
    let root = document.querySelector(':root');

    let hue;
    let saturation;
    let lightness;
    let arrayColors = []; // array for save two color values

    for (let i = 0; i < 2; i++) {
        hue = Math.floor(Math.random() * 359);
        saturation = Math.floor(Math.random() * 100);
        lightness = Math.floor(Math.random() * 100);
        arrayColors.push(hue + ', ' + saturation + '%, ' + lightness + '%')
    }

    root.style.setProperty('--color_top', ('hsl(' + arrayColors[0] + ')'));
    root.style.setProperty('--color_bottom', ('hsl(' + arrayColors[1] + ')'));

    color_value_top.innerHTML = "hsl(" + arrayColors[0] + ")";
    color_value_bottom.innerHTML = "hsl(" + arrayColors[1] + ")";
}