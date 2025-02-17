// Function to populate font options dynamically
window.onload = function() {
    figlet.fonts(function(err, fonts) {
        if (err) {
            console.error('Error loading fonts:', err);
            return;
        }

        const fontSelect = document.getElementById('fontSelect');
        if (fonts.length === 0) {
            alert("No fonts available.");
            return;
        }

        // Populate the font select dropdown
        fonts.forEach((font) => {
            const option = document.createElement('option');
            option.value = font;
            option.textContent = font;
            fontSelect.appendChild(option);
        });

        // Set default font
        fontSelect.value = fonts[0];
    });
};

// Function to generate ASCII art
function generateASCII() {
    const text = document.getElementById('textInput').value;
    const font = document.getElementById('fontSelect').value;
    const width = document.getElementById('widthSelect').value;
    const height = document.getElementById('heightSelect').value;

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    // Generate ASCII art using figlet
    figlet.text(text, { font: font, width: width, height: height }, function(err, result) {
        if (err) {
            console.error('Error generating ASCII:', err);
            return;
        }
        document.getElementById('asciiOutput').textContent = result;
    });
}

// Function to download the ASCII art as a file
function downloadASCII() {
    const asciiArt = document.getElementById('asciiOutput').textContent;

    if (asciiArt.trim() === "") {
        alert("No ASCII art to download!");
        return;
    }

    // Create a Blob and trigger the download
    const blob = new Blob([asciiArt], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ascii_art.txt';
    link.click();
}
