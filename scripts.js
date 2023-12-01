document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('subscriptionForm');
    var message = document.getElementById('subscriptionMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        if (name && email) {
            message.textContent = 'Thank you for subscribing, ' + name + '!';
            message.style.color = 'green';
            message.style.fontWeight = 'bold';
            form.reset();
        } else {
            message.textContent = 'Please fill in both your name and email.';
            message.style.color = 'red';
            message.style.fontWeight = 'bold';
        }
    });
});