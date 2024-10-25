class RegistrationForm {
    constructor() {
        this.registrationForm = document.getElementById('registrationForm');
        this.initEventListeners();
    }
    
    initEventListeners() {
        if (this.registrationForm) {
            this.registrationForm.addEventListener('submit', (e) => this.handleRegistration(e));
        }

        if (document.getElementById('switchToLogin')) {
            document.getElementById('switchToLogin').addEventListener('click', () => this.switchToLogin());
        }
    }

    async handleRegistration(event) {
        event.preventDefault();
        const formData = new FormData(this.registrationForm);
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Регистрация успешна!');
                this.switchToLogin();
            } else {
                throw new Error('Ошибка при регистрации');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Произошла ошибка при регистрации');
        }
    }

    switchToLogin() {
        window.location.href = 'login.html'; // Переход на страницу входа
    }
}

const registrationForm = new RegistrationForm();
