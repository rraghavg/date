document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('revealButton').addEventListener('click', function() {
        document.getElementById('responseForm').classList.remove('hidden');
        animateInvitationMessage();
    });

    document.getElementById('responseForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var response = document.getElementById('responseInput').value;
        alert('Response submitted: ' + response);
        document.getElementById('responseForm').classList.add('hidden');
        document.getElementById('responseConfirmation').classList.remove('hidden');
    });
});

function animateInvitationMessage() {
    var message = document.getElementById('invitationMessage');
    message.classList.remove('hidden');
    var opacity = 0;
    var interval = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(interval);
        }
        message.style.opacity = opacity;
        opacity += 0.1;
    }, 100);
}
