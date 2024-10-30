// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark');
    const toggle = document.getElementById('themeToggle');
    toggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

const popupContainers = {
    'resetPassword': document.getElementById('resetPasswordPopup'),
    'emailConfirmation': document.getElementById('emailConfirmationPopup'),
    'newPassword': document.getElementById('newPasswordPopup')
};

const loginForm = document.getElementById('loginForm');
const forgotPasswordLink = document.getElementById('forgotPassword');
const sendResetLink = document.getElementById('sendResetLink');
const setNewPasswordLink = document.getElementById('setNewPassword');
const checkCodeLink = document.getElementById('checkCode');

function showPopup(type) {
    console.log(`Попап ${type} показан`);
    const currentPopup = popupContainers[type];
    if (!currentPopup) {
        console.error(`Не найден попап ${type}`);
        return;
    }

    // Очищаем текущий попап
    // while (currentPopup.firstChild) {
    //     currentPopup.removeChild(currentPopup.firstChild);
    // }

    // Показываем содержимое попапа
    currentPopup.style.display = 'block';
}

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Клик по ссылке сброса пароля');
    showPopup('resetPassword');
});

sendResetLink.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Клик по выфя');
    hideResetPasswordPopup();
    showPopup('emailConfirmation');
});

checkCodeLink.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Клик по выфя2');
    hideEmailConfirmationPopup();
    showPopup('newPassword');
});

setNewPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Клик по выфя3');
    hideAllPopups();
});

const resetPasswordForm = document.querySelector('#resetPasswordPopup .InputField');
if (resetPasswordForm) {
    const sendResetLink = resetPasswordForm.querySelector('.Button');

    if (sendResetLink) {
        sendResetLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Клик по кнопке сброса пароля');
            showPopup('emailConfirmation');
        });
    }
}

const checkCodeButton = document.getElementById('checkCode');
if (checkCodeButton) {
    checkCodeButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Проверка кода');
        const code = document.getElementById('confirmationCode').value.trim();

        if (code) {
            console.log('Код введен, показываем попап нового пароля');
            showPopup('newPassword');
        } else {
            alert('Пожалуйста, введите код подтверждения.');
        }
    });
}

const setNewPasswordButton = document.getElementById('setNewPassword');
if (setNewPasswordButton) {
    setNewPasswordButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Новый пароль установлен успешно!');
        hideAllPopups();
    });
}

function hideResetPasswordPopup() {
    const resetPasswordPopup = document.getElementById('resetPasswordPopup');
    if (resetPasswordPopup && resetPasswordPopup.style.display === 'block') {
        resetPasswordPopup.style.display = 'none';
        console.log('Попап восстановления пароля скрыт');
    } else {
        console.log('Попап восстановления пароля уже скрыт или не был открыт');
    }
}

function hideEmailConfirmationPopup() {
    const emailConfirmationPopup = document.getElementById('emailConfirmationPopup');
    if (emailConfirmationPopup && emailConfirmationPopup.style.display === 'block') {
        emailConfirmationPopup.style.display = 'none';
        console.log('Попап подтверждения email скрыт');
    } else {
        console.log('Попап подтверждения email уже скрыт или не был открыт');
    }
}


function hideAllPopups() {
    Object.values(popupContainers).forEach(popup => {
        popup.style.display = 'none';
    });
}

document.getElementById('switchToRegister').addEventListener('click', function() {
    window.location.href = 'registration.html';
});

const loginButton = document.querySelector('.LoginForm button');

if (loginButton) {
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Клик по кнопке входа');
        // Здесь нужно добавить логику для открытия попапа восстановления пароля
        window.location.href = 'products_menu.html';
    });
}

window.onload = function() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Добавляем проверку на наличие элементов формы логина
    if (!loginForm || !forgotPasswordLink) {
        console.error('Не найдена форма логина или ссылка сброса пароля');
    }
};
