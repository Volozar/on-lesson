// alert("Hello!")

/* var toggle = document.querySelector(".header__nav-toggle");
// console.log(toggle); 
var myFunction = function () {

    var nav = document.querySelector(".header__nav");
    nav.classList.toggle("d-none"); //по нажатию удаляем класс d-none
};
//команда найти элемент в переменной


toggle.addEventListener("click", myFunction);
// let f = ["Вася", 24, "c"];
// let g = {name:"Петя", age:25};
// console.log(typeof f.age); 
// console.log(g[0], g[1]);

// let a = 5;
// let b = "6";
// console.log(a + b);


function sum(x, y) {
    console.log(x + y);
    return Number(x) + Number(y);
}

function sub(x, y) {
    console.log(x - y);
    return Number(x) - Number(y);
}

function mult(x, y) {
    console.log(x * y);
    return Number(x) * Number(y);
}

function div(x, y) {
    console.log(x / y);
    return Number(x) / Number(y);
}

let a = prompt("Введите число");
console.log(a);

let b = prompt("Введите еще одно число"); */

//способ 1
// if (!sum(a, b)) {
//     alert("ERROR");1
// }
// else {
//     (alert(sum(a, b)));
// }


//способ 2

// if (isNaN(sum(a, b))) { //проверка на NaN
//     alert("ERROR");
// }
// else {
//     (alert(sum(a, b)));
// }

// console.dir([]);





/* const a = false;
const b = 5;
console.log(a || b);

if (a || b) {
    console.log("true");
} else {
    console.log("false");
} */


const a = 3;
const b = 5;


// a && console.log(b);

//Три равносильных оператора:
c = a || b;
//равносильно

c = a == true ? a : b; //тернарный оператор
//равносильно ниже

if (a) {
    c = a

} else {
    c = b;
}

switch (b) {
    case 5:
        console.log("5");
        break;
    case 6:
        console.log("6");
        break;
    case 0:
        console.log("privet");
        break;
    default:
        alert("не опознано");
}

/* let hello = prompt("Поздоровайтесь :)");
hello.trim(); */
/* if (hello == "Привет") {
    alert("Здарова!");
} else {
    alert("Прощай");
} */

// a == 5 ? b = a : b = null; //ЗАДАЧА

// hello == "Привет" ? alert("Здарова") : alert("Прощай");
// a == 5 || (a!== 5 && b = a) || b = null;

/* switch (hello) {
    case "Привет": alert("Привет");
        break;
    case "Привет!": alert("Привет!");
        break;
    case "Пока": alert("Пока");
        break;
    default: alert("Введите пожалуйста текст");
} */

arr100 = [];
for (let i = 0; i < 100; i++) {
    arr100[i] = i;
}

// arr100.forEach(element => {
//     element/3 && element/5 && alert("FitBus");
//     element == 3 && alert("Fit");
//     element == 5 && alert("Bus");
// });


funcFitBus = function(element){
    if (element % 3 == 0 && element % 5 == 0) {
        console.log("FitBus");
        console.log(element);

    } else if (element % 3 == 0) {
        console.log("Fit");
        console.log(element);
        
} else if (element % 5 == 0) {
        console.log("Bus");
        console.log(element);        
    }
}

arr100.forEach(element => {
    // funcFitBus(element);   

    (element % 3 == 0 && element % 5 == 0) ? console.log("FitBus") : element % 3 == 0 ? console.log("Fit") : element % 5 == 0 ? console.log("Bus") : console.log("THE END");

    // (element % 3 && element % 5) == 0 && console.log("FitBus");
    // element % 3 == 0 && console.log("Fit");
    // element % 5 == 0 && console.log("Bus")    
});
