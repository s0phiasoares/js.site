document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const submitBtn = document.getElementById('submit-btn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Visual feedback for the user
        submitBtn.innerText = 'Verifying...';
        submitBtn.disabled = true;

        const username = document.getElementById('username').value;

        // Simulate a server request
        setTimeout(() => {
            alert(`Welcome back, ${username}!`);

            // Reset button state
            submitBtn.innerText = 'Sign In';
            submitBtn.disabled = false;

            // Reset form
            loginForm.reset();
        }, 1200);
    });
});