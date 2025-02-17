function generateAscii() {
    let text = document.getElementById('inputText').value;
    let font = document.getElementById('font').value;
    let width = parseInt(document.getElementById('width').value) || 80;
    let height = parseInt(document.getElementById('height').value) || 20;

    figlet.defaults({ width: width, height: height });

    figlet.text(text, { font: font }, function (err, data) {
        if (err) {
            console.error('Error generating ASCII art:', err);
            return;
        }
        document.getElementById('asciiOutput').innerText = data;
    });
}

function copyToClipboard() {
    let output = document.getElementById('asciiOutput').innerText;
    navigator.clipboard.writeText(output).then(() => {
        alert("ASCII Art berhasil disalin!");
    }).catch(err => {
        console.error("Gagal menyalin teks:", err);
    });
}
