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
   
   // Изменение изображения глазика
   const eyeIcon = document.getElementById('togglePassword1');
   eyeIcon.src = passwordType === 'password' ? 'C:\\Users\\datch\\Desktop\\Проекты\\mebel_shop\\6e518c36-3356-4ee0-8ba0-c6de30905ef8.png' : 'C:\\Users\\datch\\Desktop\\Проекты\\mebel_shop\\ca906d9d-e4eb-4937-aaec-3bad0ff69c53.png'; // Замените на ваши пути к изображениям

   passwordField.setAttribute('type', passwordType);
});

document.getElementById('togglePassword2').addEventListener('click', function() {
   const passwordField = document.getElementById('passwordField2');
   const passwordType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
   
   // Изменение изображения глазика
   const eyeIcon = document.getElementById('togglePassword2');
   eyeIcon.src = passwordType === 'password' ? 'C:\\Users\\datch\\Desktop\\Проекты\\mebel_shop\\6e518c36-3356-4ee0-8ba0-c6de30905ef8.png' : 'C:\\Users\\datch\\Desktop\\Проекты\\mebel_shop\\ca906d9d-e4eb-4937-aaec-3bad0ff69c53.png'; // Замените на ваши пути к изображениям

   passwordField.setAttribute('type', passwordType);
});

// Переключение темы
document.getElementById('themeToggle').addEventListener('click', function() {
   document.body.classList.toggle('dark');
   
   const registrationForm = document.getElementById('registrationForm');
   const loginForm = document.getElementById('loginForm');

   registrationForm.classList.toggle('dark');
   loginForm.classList.toggle('dark');
});