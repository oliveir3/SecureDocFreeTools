/* ===========================
   SecureDocFreeTools JS
   =========================== */

/**
 * Utility function: Display messages in a tool result div
 * @param {string} selector - Element ID
 * @param {string} message - Message to display
 */
function showMessage(selector, message) {
    const el = document.getElementById(selector);
    if (el) el.textContent = message;
}

/**
 * Utility function: Read selected file
 * @param {string} inputId - File input ID
 * @returns {File|null}
 */
function getSelectedFile(inputId) {
    const input = document.getElementById(inputId);
    if (!input || !input.files || input.files.length === 0) {
        alert('Please select a file.');
        return null;
    }
    return input.files[0];
}

/* ===========================
   OCR Tool Handler
   =========================== */
function handleOCR(imageInputId, resultDivId) {
    const file = getSelectedFile(imageInputId);
    if (!file) return;

    showMessage(resultDivId, 'Processing OCR...');

    Tesseract.recognize(file, 'eng', { logger: m => console.log(m) })
        .then(({ data: { text } }) => showMessage(resultDivId, text))
        .catch(err => showMessage(resultDivId, 'Error processing OCR: ' + err));
}

/* ===========================
   Placeholder for other tools
   =========================== */
// Example: function handlePDFMerge(...) { ... }
// Example: function handleImageResize(...) { ... }
// Add your tool handlers here as you expand the app
