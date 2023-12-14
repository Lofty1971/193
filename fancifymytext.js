function increaseTextSize() {
    document.getElementById("text-input").style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("text-input");
    var fancyRadio = document.getElementById("fancy-radio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "initial";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("text-input");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    
    

    text = sentences.join("-Moo.");

    textArea.value = text;
}

var mooButton = document.getElementById("moo-button");
var fancyRadio = document.getElementById("fancy-radio");
var boringRadio = document.getElementById("boring-radio");

mooButton.addEventListener("click", mooText);
fancyRadio.addEventListener("change", applyStyles);
boringRadio.addEventListener("change", applyStyles);
