class RegistrationForm {
    constructor() {
        this.registrationForm = document.getElementById('registrationForm');
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Добавляем обработчик события для формы регистрации
        if (this.registrationForm) {
            this.registrationForm.addEventListener('submit', (e) => this.handleRegistration(e));
        }

        // Переключение на форму логина
        const switchToLogin = document.getElementById('switchToLogin');
        if (switchToLogin) {
            switchToLogin.addEventListener('click', () => this.switchToLogin());
        }
    }

    async handleRegistration(event) {
        event.preventDefault();
        console.log('Пользователь пытается зарегистрироваться');
        // Здесь можно добавить дополнительную логику обработки формы регистрации
        // После выполнения всех действий, переходим на форму авторизации
        window.location.href = 'login.html'; // Переход на страницу входа после регистрации
    }

    switchToLogin() {
        window.location.href = 'login.html'; // Переход на страницу входа
    }
}

// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark'); // Добавляем или убираем класс 'dark' у body
    const toggle = document.getElementById('themeToggle');

    // Меняем текст кнопки переключения темы
    toggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
}

// Добавляем обработчик для переключения темы
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = new RegistrationForm();

    const togglePassword1 = document.getElementById('togglePassword1');
    const togglePassword2 = document.getElementById('togglePassword2');
    const passwordField1 = document.getElementById('passwordField1');
    const passwordField2 = document.getElementById('passwordField2');

    togglePassword1.addEventListener('click', function() {
        const type = passwordField1.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField1.setAttribute('type', type);
        this.src = type === 'text' ? '../resources/ca906d9d-e4eb-4937-aaec-3bad0ff69c53.png' : '../resources/6e518c36-3356-4ee0-8ba0-c6de30905ef8.png'; // Измените путь на свою картинку для открытого глаза
    });

    togglePassword2.addEventListener('click', function() {
        const type = passwordField2.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField2.setAttribute('type', type);
        this.src = type === 'text' ? '../resources/ca906d9d-e4eb-4937-aaec-3bad0ff69c53.png' : '../resources/6e518c36-3356-4ee0-8ba0-c6de30905ef8.png'; // Измените путь на свою картинку для открытого глаза
    });
});