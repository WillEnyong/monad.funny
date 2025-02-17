// script.js
const fonts = ["Standard", "Big Money-nw", "Slant", "Ghost", "Banner", "Big", "Doom"];

document.addEventListener("DOMContentLoaded", function () {
    let fontSelect = document.getElementById("fontSelect");
    fonts.forEach(font => {
        let option = document.createElement("option");
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
    });
});

function generateASCII() {
    let text = document.getElementById("textInput").value;
    let font = document.getElementById("fontSelect").value;
    let width = document.getElementById("widthSelect").value;
    let height = document.getElementById("heightSelect").value;
    
    if (text.trim() === "") {
        document.getElementById("asciiOutput").innerText = "(Enter text to generate ASCII Art)";
        return;
    }
    
    figlet.text(text, { font: font, width: width, height: height }, function(err, data) {
        if (err) {
            console.error("FIGlet error: ", err);
            return;
        }
        document.getElementById("asciiOutput").innerText = data;
    });
}

function downloadASCII() {
    let asciiText = document.getElementById("asciiOutput").innerText;
    let blob = new Blob([asciiText], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ascii-art.txt";
    link.click();
}
