document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    //Regular expression to validate South African phone numbers in E.164 format
    const saPhoneRegex = /^\+27\d{9}$/;

    if(!saPhoneRegex.test(phone)){
        alert('Please enter a valid South African phone number in E.164 format(e.g., +27123456789).');
        return;
    }

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