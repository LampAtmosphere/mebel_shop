document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращает отправку формы
    
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Здесь желательно реализовать авторизацию на сервере
    // Для примерной проверки:
    const validEmail = 'test@example.com'; // Замените на свою логику
    const validPassword = 'password123'; // Замените на свою логику

    if (email === validEmail && password === validPassword) {
        // Успешный вход
        window.location.href = 'products_menu.html'; // Переход на страницу с продуктами
    } else {
        alert('Неверный логин или пароль!'); // Уведомление о неудаче
    }
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    window.location.href = 'reset_password.html'; // Переход на страницу восстановления пароля
});

document.getElementById('switchToRegister').addEventListener('click', function() {
    window.location.href = 'registration_form.html'; // Переход на страницу регистрации
});