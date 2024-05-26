document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const nssId = document.getElementById('nss-id').value;
    const university = document.getElementById('university').value;
    const year = document.getElementById('year').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <p>Thank you for registering, ${name}!</p>
    `;
    setTimeout(() => {
        window.location.href = 'login.html'; 
    }, 3000);
});
