// "use strict"

/* const adv = (x, y) => {
    const a = (x + y) / 2;
    return a;
} */

HTMLCollection.prototype.forEach = [].forEach;
// чтобы можжно было использовать фор-ич для псевдомассива
const slides = document.getElementsByClassName("slider__item");
const slidesLenght = slides.length;

const buttons = document.createElement("div");
buttons.classList.add("slider__buttons");

const Arr = Array(slidesLenght); //создаём массив из slidesLenght элементов
Arr.fill(null);


function changeSlide(n) {}


Arr.forEach((element, i) => {
    const button = document.createElement("button");
    button.classList.add("slider__dot");

    button.onclick = () => {
        slides.forEach((element, i) => {
            console.log(element)
            element.classList.remove("active");
        })
        slides[i].classList.add("active");
    }

    buttons.appendChild(button);
});

const container = document.getElementsByClassName("slider__container");

container[0].appendChild(buttons);

//ДЗ СДЕЛАТЬ ЧТОБЫ РАБОТАЛИ КНОПКИ

