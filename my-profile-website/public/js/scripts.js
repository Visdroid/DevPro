document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, message})
    })
        .then(Response => Response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred');
        });

});