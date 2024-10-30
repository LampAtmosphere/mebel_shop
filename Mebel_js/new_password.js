// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark'); // Добавляем или убираем класс 'dark' у body
    const toggle = document.getElementById('themeToggle');

    // Меняем текст кнопки переключения темы
    toggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
}

// Обработчик события для отправки ссылки сброса пароля
// document.getElementById('sendResetLink').addEventListener('click', function() {
//     const email = document.getElementById('emailInput').value;

//     // Здесь должна быть ваша логика для проверки email
//     const emailExists = true; // Здесь подразумевается, что email существует

//     if (email && emailExists) { // Проверяем, что email введен и он существует
//         // Перенаправляем на confirm_email_form.html (или другую страницу)
//         window.location.href = 'confirm_email_form.html';
//     } else {
//         alert('Пожалуйста, проверьте, правильно ли введен ваш email или он не зарегистрирован.'); // Сообщение об ошибке
//     }
// });

// // Обработчик события для установки нового пароля
// document.getElementById('setNewPassword').addEventListener('click', function() {
//     const newPassword = document.getElementById('newPassword').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     // Проверяем, совпадают ли пароли
//     if (newPassword === confirmPassword && newPassword.length > 0) {
//         // Здесь вы можете добавить AJAX-запрос для сохранения нового пароля в базу данных.
//         alert('Пароль успешно изменён!'); // Убрать в реальной реализации
//         window.location.href = 'login.html'; // Перенаправление на login.html
//     } else {
//         alert('Пароли не совпадают или пусты. Пожалуйста, повторите ввод.');
//     }
// });

// Добавляем обработчик для переключения темы
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
