function generateAscii() {
    let text = document.getElementById("inputText").value;
    let font = document.getElementById("font").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let output = document.getElementById("asciiOutput");

    if (text.trim() === "") {
        output.textContent = "Please enter text!";
        return;
    }

    // Placeholder ASCII Generator (Nantinya pakai API atau library)
    let asciiArt = "";
    for (let i = 0; i < height; i++) {
        asciiArt += text.split("").map(char => char.repeat(width)).join(" ") + "\n";
    }

    output.textContent = asciiArt;
}

function copyToClipboard() {
    let output = document.getElementById("asciiOutput");
    navigator.clipboard.writeText(output.textContent).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy:", err);
    });
}
