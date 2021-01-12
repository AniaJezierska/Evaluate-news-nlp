function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;
    console.log(formText);
    if (Client.checkUrl(formText) == true) {
        fetch('http://localhost:8081/analyse', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: formText
                })
            })
            .then(response => response.json())
            .then(function (response) {
                document.getElementById('polarity').innerHTML = response.polarity
                document.getElementById('subjectivity').innerHTML = response.subjectivity
                document.getElementById('polarity-confidence').innerHTML = response.polarity_confidence
                document.getElementById('subjectivity-confidence').innerHTML = response.subjectivity_confidence
            })
    } else {
        console.log('Invalid URL');
    }
}

export {
    handleSubmit
}
