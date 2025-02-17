const generateButton = document.getElementById('generateButton');
const inputText = document.getElementById('inputText');
const asciiOutput = document.getElementById('asciiOutput');
const fontSelect = document.getElementById('fontSelect');

// Data Font (Ini adalah contoh sederhana, Anda perlu memperluasnya)
const fonts = {
    graffiti: {
        'A': "  ####  \n #    # \n #    # \n ###### \n #    # \n #    # \n",
        'B': " #####  \n #     #\n #####  \n #     #\n #####  \n",
        ' ': "     \n", // Spasi
        '1': "  #  \n ##  \n  #  \n  #  \n #####\n",
        'C': "  ####  \n #      \n #      \n #      \n #      \n  ####  \n" ,
        'D': " #####  \n #     #\n #     #\n #     #\n #####  \n" ,
        'E': " ###### \n #      \n ###### \n #      \n ###### \n",
         'F': " ###### \n #      \n ###### \n #      \n #      \n",
         'G': "  ####  \n #      \n #  ####\n #     #\n  ##### \n",
         'H': " #    # \n #    # \n ###### \n #    # \n #    # \n",
         'I': " ###### \n   ##   \n   ##   \n   ##   \n ###### \n",
        'J': " ###### \n    ##  \n    ##  \n    ##  \n ###### \n",
        'K': " #    # \n #   #  \n ###### \n #   #  \n #    # \n",
        'L': " #      \n #      \n #      \n #      \n ###### \n",
        'M': " #    # \n ##  ## \n # ## # \n #    # \n #    # \n",
        'N': " #    # \n ##   # \n # #  # \n #  # # \n #   ## \n",
        'O': "  ####  \n #    # \n #    # \n #    # \n  ####  \n",
        'P': " #####  \n #     #\n #####  \n #      \n #      \n",
        'Q': "  ####  \n #    # \n #    # \n #   ## \n  #### #\n",
        'R': " #####  \n #     #\n #####  \n #  #   \n #   #  \n",
        'S': "  ####  \n #      \n  ####  \n      # \n  ####  \n",
        'T': " ###### \n   ##   \n   ##   \n   ##   \n   ##   \n",
        'U': " #    # \n #    # \n #    # \n #    # \n  ####  \n",
        'V': " #    # \n #    # \n #    # \n  #  #  \n   ##   \n",
        'W': " #    # \n #    # \n # # # # \n # # # # \n  #  #  \n",
        'X': " #    # \n  #  #  \n   ##   \n  #  #  \n #    # \n",
        'Y': " #    # \n  #  #  \n   ##   \n   ##   \n   ##   \n",
        'Z': " ###### \n     #  \n    #   \n   #    \n ###### \n",
        '0': "  ####  \n #    # \n #    # \n #    # \n  ####  \n",
        '2': " ###### \n      # \n  ##### \n #      \n ###### \n",
        '3': " ###### \n      # \n  ##### \n      # \n ###### \n",
        '4': " #    # \n #    # \n ###### \n      # \n      # \n",
        '5': " ###### \n #      \n ###### \n      # \n ###### \n",
        '6': "  ####  \n #      \n ###### \n #    # \n  ####  \n",
        '7': " ###### \n      # \n     #  \n    #   \n   #    \n",
        '8': "  ####  \n #    # \n  ####  \n #    # \n  ####  \n",
        '9': "  ####  \n #    # \n  ##### \n      # \n  ####  \n",


    },
    standard: {
         'A': "  ***  \n *   * \n *   * \n ***** \n *   * \n *   * \n",
        'B': " ****  \n *   * \n ****  \n *   * \n ****  \n",
        ' ': "     \n",
        '1': "  *  \n **  \n  *  \n  *  \n *****\n",
        'C': "  ***  \n *      \n *      \n *      \n *      \n  ***  \n",
        'D': " ****  \n *   * \n *   * \n *   * \n ****  \n",
        'E': " ****** \n *      \n ****** \n *      \n ****** \n",
         'F': " ****** \n *      \n ****** \n *      \n *      \n",
         'G': "  ***  \n *      \n *  ***\n *     *\n  **** \n",
         'H': " *   * \n *   * \n ***** \n *   * \n *   * \n",
         'I': " ****** \n   **   \n   **   \n   **   \n ****** \n",
        'J': " ****** \n    **  \n    **  \n    **  \n ****** \n",
        'K': " *   * \n *  *  \n ****  \n *  *  \n *   * \n",
        'L': " *      \n *      \n *      \n *      \n ****** \n",
        'M': " *   * \n ** ** \n * * * \n *   * \n *   * \n",
        'N': " *   * \n **  * \n * * * \n *  ** \n *   **\n",
        'O': "  ***  \n *   * \n *   * \n *   * \n  ***  \n",
        'P': " ****  \n *   * \n ****  \n *      \n *      \n",
        'Q': "  ***  \n *   * \n *   * \n *  ** \n  *** *\n",
        'R': " ****  \n *   * \n ****  \n *  *   \n *   *  \n",
        'S': "  ***  \n *      \n  ***  \n      * \n  ***  \n",
        'T': " ****** \n   **   \n   **   \n   **   \n   **   \n",
        'U': " *   * \n *   * \n *   * \n *   * \n  ***  \n",
        'V': " *   * \n *   * \n *   * \n  * *  \n   **   \n",
        'W': " *   * \n *   * \n * * * * \n * * * * \n  *  *  \n",
        'X': " *   * \n  * *  \n   **   \n  * *  \n *   * \n",
        'Y': " *   * \n  * *  \n   **   \n   **   \n   **   \n",
        'Z': " ****** \n     *  \n    *   \n   *    \n ****** \n",
        '0': "  ***  \n *   * \n *   * \n *   * \n  ***  \n",
        '2': " ****** \n      * \n  ***** \n *      \n ****** \n",
        '3': " ****** \n      * \n  ***** \n      * \n ****** \n",
        '4': " *   * \n *   * \n ****** \n      * \n      * \n",
        '5': " ****** \n *      \n ****** \n      * \n ****** \n",
        '6': "  ***  \n *      \n ****** \n *   * \n  ***  \n",
        '7': " ****** \n      * \n     *  \n    *   \n   *    \n",
        '8': "  ***  \n *   * \n  ***  \n *   * \n  ***  \n",
        '9': "  ***  \n *   * \n  **** \n      * \n  ***  \n",

    },
    slant: {
        'A': "  ***  \n *   * \n *   * \n *   * \n ***** \n",
        'B': " ***  \n *   * \n *   * \n *   * \n ***  \n",
        ' ': "  \n",
        '1': "  *  \n * * \n  * \n  * \n ***** \n",
        'C': "  *** \n *    \n *     \n *     \n  *** \n",
        'D': " ***  \n *   * \n *   * \n *   * \n ***  \n",
        'E': " ***** \n *     \n *****  \n *      \n *****  \n",
        'F': " *****  \n *      \n *****  \n *      \n *      \n",
        'G': "  ***  \n *   * \n *     \n *   *  \n  ***  \n",
        'H': " *   * \n *   * \n ***** \n *   * \n *   * \n",
        'I': " *** \n  *  \n  *  \n  *  \n *** \n",
        'J': "  *** \n   *  \n   *  \n   *  \n  ***  \n",
        'K': " *   * \n *  * \n *** \n *  * \n *   * \n",
        'L': " *  \n *  \n *  \n *  \n ***  \n",
        'M': " *   *  \n * * * \n * * *  \n *   * \n *   *  \n",
        'N': " *   * \n **  * \n * * * \n *  ** \n *   * \n",
        'O': "  ***  \n *   * \n *   * \n *   * \n  ***  \n",
        'P': " ***   \n *   * \n ***   \n *   \n *   \n",
        'Q': "  *** \n *   * \n *   * \n *  * \n  *** \n",
        'R': " ***  \n *   * \n ***  \n *   * \n *    * \n",
        'S': "  ***  \n *      \n  ***  \n      *  \n  ***  \n",
        'T': " ***** \n  *  \n  *  \n  * \n  * \n",
        'U': " *   * \n *   * \n *   * \n *   * \n  *** \n",
        'V': " *   *  \n *   * \n  * *  \n   *   \n   *    \n",
        'W': " *   * \n *   *  \n * * * \n * * * \n  * *  \n",
        'X': " *   * \n  * * \n   * \n  * * \n *   * \n",
        'Y': " *   * \n  * * \n   *  \n   *  \n   * \n",
        'Z': " ***** \n    *  \n   *   \n  *    \n *****  \n",
        '0': "  ***  \n *   * \n *   * \n *   * \n  ***  \n",
        '2': " *****  \n     * \n   *** \n  *     \n ***** \n",
        '3': " ***** \n      * \n   *** \n      * \n ***** \n",
        '4': " *  * \n *  * \n *****  \n      *  \n      *  \n",
        '5': " ***** \n *      \n ***** \n      * \n ***** \n",
        '6': "  *** \n *     \n ***** \n *   * \n  *** \n",
        '7': " *****  \n     *  \n    *   \n   *    \n  *    \n",
        '8': "  ***  \n *   * \n  ***  \n *   * \n  ***  \n",
        '9': "  ***  \n *   * \n  ***  \n       * \n  *** \n",
    }
};

function generateASCIIArt(text, selectedFont) {
    let asciiArt = "";
    const font = fonts[selectedFont];

    if (!font) {
        return "Font tidak ditemukan."; // Handle jika font tidak ada
    }

    for (const char of text.toUpperCase()) {
        if (font[char]) {
            asciiArt += font[char];
        } else {
            asciiArt += " ? \n"; // Karakter tidak ditemukan
        }
    }
    return asciiArt;
}

generateButton.addEventListener('click', () => {
    const text = inputText.value;
    const selectedFont = fontSelect.value;
    const asciiArt = generateASCIIArt(text, selectedFont);
    asciiOutput.textContent = asciiArt;
});
