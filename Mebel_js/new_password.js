document.getElementById('sendResetLink').addEventListener('click', function() {
    const email = document.getElementById('emailInput').value;

    // Здесь должна быть ваша логика для проверки email
    // Например, AJAX-запрос к вашему серверу
    const emailExists = true; // Здесь подразумевается, что email существует

    if (email && emailExists) { // Проверяем, что email введен и он существует
        // Перенаправляем на confirm_email_form.html
        window.location.href = 'confirm_email_form.html';
    } else {
        alert('Пожалуйста, проверьте, правильно ли введен ваш email или он не зарегистрирован.'); // Сообщение об ошибке
    }
});

document.getElementById('setNewPassword').addEventListener('click', function() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Проверяем, совпадают ли пароли
    if (newPassword === confirmPassword && newPassword.length > 0) {
        // Здесь вы можете добавить AJAX-запрос для сохранения нового пароля в базу данных.
        // Пример:
        /*
        fetch('/change-password', { // Замените на свой эндпоинт
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: newPassword }) // Передаем новый пароль
        })
        .then(response => {
            if (response.ok) {
                // Если пароль успешно сохранен
                window.location.href = 'login.html'; // Перенаправление на страницу входа
            } else {
                alert('Произошла ошибка при смене пароля. Попробуйте еще раз.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при смене пароля. Попробуйте еще раз.');
        });
        */

        // Для примера, уберите это и реализуйте AJAX запрос
        alert('Пароль успешно изменён!'); // Убрать в реальной реализации
        window.location.href = 'login.html'; // Перенаправление на login.html
    } else {
        alert('Пароли не совпадают или пусты. Пожалуйста, повторите ввод.');
    }
});
