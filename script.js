var r = document.querySelector(':root');

// Create a function for make gradient
function createGradient() {
    var randomColor_top = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var randomColor_bottom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    r.style.setProperty('--color_top', randomColor_top);
    r.style.setProperty('--color_bottom', randomColor_bottom);

    // Show hex-code colors in HTML
    color_value_top.innerHTML = randomColor_top;
    color_value_bottom.innerHTML = randomColor_bottom;
}