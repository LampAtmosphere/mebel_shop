// Переключение между формами регистрации и авторизации
document.getElementById('switchToLogin').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
 });
 
 document.getElementById('switchToRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
 });
 
 // Логика для кнопки регистрации
 document.querySelector('.RegistrationForm .Button').addEventListener('click', function() {
    alert('Регистрация выполнена!');
 });
 
 // Логика для кнопки входа
 document.querySelector('.LoginForm .Button').addEventListener('click', function() {
    alert('Вход выполнен!');
 });
 
 // Логика для переключения видимости пароля
 document.getElementById('togglePassword1').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordField1');
    const passwordType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordType);
 });
 
 document.getElementById('togglePassword2').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordField2');
    const passwordType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordType);
 });