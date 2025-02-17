// script.js
function generateASCII() {
    let text = document.getElementById("textInput").value;
    let asciiArt = text.split('').map(char => char.charCodeAt(0).toString(16)).join(' ');
    document.getElementById("asciiOutput").innerText = asciiArt;
}

function downloadASCII() {
    let asciiText = document.getElementById("asciiOutput").innerText;
    let blob = new Blob([asciiText], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ascii-art.txt";
    link.click();
}
