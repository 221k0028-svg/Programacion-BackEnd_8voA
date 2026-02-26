const form = document.getElementById('contact-form');

// 1. Lógica para desaparecer el mensaje automáticamente
const alertBanner = document.getElementById('success-alert');
if (alertBanner) {
    setTimeout(() => {
        // Efecto visual para quitarlo
        alertBanner.style.display = 'none';
        
        // Limpia la URL (quita el ?enviado=1) para que no salga al recargar
        window.history.replaceState({}, document.title, window.location.pathname);
    }, 5000); // 5 segundos
}

// 2. Validación y envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const validateField = (id, condition) => {
        const field = document.getElementById(id);
        const error = field.parentElement.querySelector('.error-message');
        if (!condition) {
            field.classList.add('invalid-input');
            error.classList.remove('hidden');
            isValid = false;
        } else {
            field.classList.remove('invalid-input');
            error.classList.add('hidden');
        }
    };

    validateField('firstName', document.getElementById('firstName').value.trim() !== "");
    validateField('lastName', document.getElementById('lastName').value.trim() !== "");
    
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField('email', emailRegex.test(email.value));

  // 3. Validar Radio (Query Type)
    const querySelected = document.querySelector('input[name="query"]:checked');
    // Buscamos el error específicamente por su clase dentro del grupo
    const queryError = document.querySelector('.query-options').parentElement.querySelector('.error-message');
    
    if (!querySelected) {
        queryError.classList.remove('hidden');
        isValid = false;
    } else {
        queryError.classList.add('hidden');
    }

    validateField('message', document.getElementById('message').value.trim() !== "");

    const consent = document.getElementById('consent');
    const consentError = document.querySelector('.checkbox-group .error-message');
    if (!consent.checked) {
        consentError.classList.remove('hidden');
        isValid = false;
    } else {
        consentError.classList.add('hidden');
    }

    if (isValid) {
        // Envía el formulario al archivo procesar.php
        form.submit(); 
    }
});