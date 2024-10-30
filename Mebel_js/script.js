class FormManager {
    constructor() {
        this.formContainer = document.querySelector('.Container');
        this.themeToggle = document.getElementById('themeToggle');
        
        // Инициализация элементов форм
        this.registrationForm = document.getElementById('registrationForm');
        this.loginForm = document.getElementById('loginForm');
        
        // Инициализация других элементов
        this.forgotPassword = document.getElementById('forgotPassword');
        this.sendResetLink = document.getElementById('sendResetLink');
        this.checkCode = document.getElementById('checkCode');
        this.setNewPassword = document.getElementById('setNewPassword');
 
        this.initEventListeners();
    }
 
    initEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
 
    toggleTheme(themeToggle) {
        // Переключаем класс темной темы
        document.body.classList.toggle('dark');

        // Изменяем значок в зависимости от темы
        if (document.body.classList.contains('dark')) {
            themeToggle.textContent = '🌞'; // Значок для светлой темы
        } else {
            themeToggle.textContent = '🌙'; // Значок для темной темы
        }
    }
}