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
 
    toggleTheme() {
        if (this.themeToggle) {
            if (this.themeToggle.textContent === '🌙') {
                this.themeToggle.textContent = '☀️';
            } else {
                this.themeToggle.textContent = '🌙';
            }
        }
    }
}