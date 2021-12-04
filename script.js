// Create a function for make gradient
function createGradient() {
    var r = document.querySelector(':root');
    var randomColor_top = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var randomColor_bottom = '#' + Math.floor(Math.random() * 16777215).toString(16);
    r.style.setProperty('--color_top', randomColor_top);
    r.style.setProperty('--color_bottom', randomColor_bottom);

    // Show hex-code colors in HTML
    color_value_top.innerHTML = randomColor_top;
    color_value_bottom.innerHTML = randomColor_bottom;
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