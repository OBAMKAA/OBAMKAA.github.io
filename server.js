const button = document.querySelector("input")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const textLeft = document.querySelector('.text.left')
const textRight = document.querySelector('.text.right')
const textMy = document.querySelector(".text-my")

button.addEventListener("click", toggleTheme);
let isDarkTheme = true;
function toggleTheme(){
    if(isDarkTheme) {   
    body.style.backgroundImage = 'url("black.jpg")';
    body.style.color = 'white';
    container.style.background = '#33315e';
    textLeft.style.background = '#33315e';
    textRight.style.background = '#33315e'; 
    textMy.style.background = '#33315e';
    }else {
    body.style.backgroundImage = 'url("white.jpg")'
    body.style.color='black'
    container.style.background = '#878d89';
    textLeft.style.background = '#878d89';
    textRight.style.background = '#878d89';
    textMy.style.background = '#878d89';
    }   
    isDarkTheme = !isDarkTheme;
}

// Получаем все элементы с классом "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Функция для проверки, находится ли элемент в зоне видимости
function checkVisibility() {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible'); // Добавляем класс для активации анимации
        } else {
            element.classList.remove('visible'); // Убираем класс, если элемент вышел из зоны видимости
        }
    });
}

// Вызываем функцию при прокрутке
window.addEventListener('scroll', checkVisibility);

// Проверяем элементы на начальном экране
checkVisibility();

