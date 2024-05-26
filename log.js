document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'test@example.com' && password === 'password') {
        window.location.href = 'portal.html';
    } else {
        document.getElementById('loginResponse').textContent = 'Invalid email or password. Please try again.';
    }
});
