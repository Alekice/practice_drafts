const btnDark = document.querySelector('.button-dark');
const btnLight = document.querySelector('.button-light');

const imgDark = document.querySelector('.wardrobe-dark');
const imgLight = document.querySelector('.wardrobe-light');

function chooseDark() {
    imgDark.style.opacity = '1';
    imgLight.style.opacity = '0';
}

function chooseLight() {
    imgLight.style.opacity = '1';
    imgDark.style.opacity = '0';
}

// btnDark.addEventListener('click', chooseDark);
// btnLight.addEventListener('click', chooseLight);

const btns = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image');
let color = 'dark';

function changeImage(e) {
    if (e.target.classList.contains('button')) {
        let currentColor = color;
        color = e.target.dataset.color;

        if (currentColor === color) return;

        for (let key of images) {
            if (key.dataset.color === currentColor) {
                key.style.opacity = '0';
            } else if (key.dataset.color === color) {
                key.style.opacity = '1';
            }
        }
    }
}

btns.forEach(b => b.addEventListener('click', changeImage));