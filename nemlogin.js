document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Por favor, preencha todos os campos! ⚠️');
            return;
        }

        // Feedback visual
        submitBtn.innerText = 'Verificando...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Simula login
        setTimeout(() => {
            alert(`Bem-vindo de volta, ${username}! 👋`);
            
            // Reset
            submitBtn.innerText = 'Entrar';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            loginForm.reset();
        }, 1500);
    });

    // Animação dos inputs
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});