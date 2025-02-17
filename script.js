function generateAscii() {
    let text = document.getElementById("inputText").value;
    let font = document.getElementById("font").value;
    let output = document.getElementById("asciiOutput");

    if (text.trim() === "") {
        output.textContent = "Please enter text!";
        return;
    }

    figlet.text(text, { font: font }, function (err, result) {
        if (err) {
            output.textContent = "Error generating ASCII art!";
            console.error(err);
            return;
        }
        output.textContent = result;
    });
}

function copyToClipboard() {
    let output = document.getElementById("asciiOutput");
    navigator.clipboard.writeText(output.textContent).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}
