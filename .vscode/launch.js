fetch('your-server-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
})
.then(response => response.json())
.then(data => {
    resultsElement.innerText = data.result; // Display the result from the server
})
.catch(error => {
    console.error('Error:', error);
});
