// script.js
const text = "This is some sample text.";

fetch('/process-text', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({text})
})
.then(response => response.json())
.then(data => {
    console.log(data.processed_text);
})
.catch(error => {
    console.error(error);
});
