const checkbox = document.querySelector('.form__input_check');
// console.log(checkbox)
const submit = document.querySelector('.input_sub')
// console.dir(checkbox)

checkbox.addEventListener("change", function () {
    // addEventListener - добавляем обработчик событий, в данном случае событие "change"
    if (checkbox.checked == true) {
        submit.removeAttribute('disabled');
    } else {
        submit.setAttribute('disabled', true);
    }
})


const radio = document.querySelectorAll('.input_radio')
const hair = document.querySelector('.input_hair')
const shoes = document.querySelector('.input_shoes')


radio.forEach(element => {
    element.onchange = function () {
        // console.log(element.value)
        if (element.value == 'hair') {
            hair.removeAttribute('hidden');
            shoes.setAttribute('hidden', true);
        } else {
            shoes.removeAttribute('hidden');
            hair.setAttribute('hidden', true);
        }
    }
});

//ПРОВЕРЯЕМ НА ТО ЧТОБЫ ВСЕ ПОЛЯ БЫЛИ ЗАПОЛНЕНЫ
const form = document.getElementById('form')
const validatedInputs = document.querySelectorAll('input:not([type=radio]):not([type=checkbox]):not([type=submit]), textarea');

form.onsubmit = function (event) {
    event.preventDefault(); //предотвращаем отправление данных
    // console.log(event)
    //вариант 1
    let count = true;
    validatedInputs.forEach(function (element) {
        if (element.value === '' && !element.hidden) count = false;            
        if (count == true) {
            alert('поля заполнены');
            return;
        } else {
            alert('поля не заполнены');
            return;
        }
        console.log(count)
    })
}

//вариант 2
const a = validatedInputs.every(function (element) {
    if (element.value != '' && element.hidden) return true;
})
