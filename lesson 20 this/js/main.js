const agItem = document.getElementsByClassName('agax__item');

HTMLCollection.prototype.forEach = [].forEach;

agItem.forEach(element => {
    element.onclick = function () {
        console.log(this.innerText)
    }
});

const Orc = function (name, health, age) {
    this.name = name;
    this.health = health;
    this.age = age;
}

Orc.prototype.say = function () {
    console.log('Меня зовут ' + this.name);
    this.log = function () {
        console.log('Privet')
    }
}

Orc.prototype.damage = function () {
    (this.health -= 10);
    console.log('Осталось ' + this.health + ' hp')
}

Orc.prototype.myAge = function () {
    console.log('Мне ' + this.age + ' лет')
}

const Vasy = new Orc("Вася", 100, 15);
const Pety = new Orc("Вася", 85, 18);

Vasy.say()
Vasy.myAge()
Vasy.damage()
Vasy.toString()

console.log(Vasy);
console.log(Pety);

const date = new Date()
console.log(date.getFullYear())
console.dir(document.querySelector("div"))

function getUser(url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = function (data) {
        // console.log(data.currentTarget.response)
        const response = data.currentTarget.response;
        const responseObj = JSON.parse(response);
        console.log(responseObj.message);

        responseObj.message.forEach(element => {
            img = document.createElement('img')
            div = document.createElement('div')
            img.src = element;
            agax.appendChild(img)
        });
        
        // img.src = responseObj.avatar_url;
    }
    xhr.send()

}

const API = 'https://dog.ceo/api/breed/hound/images/random/20';

getUser(API)

// const img = document.createElement('img')
// img.src = 'https://avatars0.githubusercontent.com/u/20154090?v=4';

// document.body.appendChild(img);

//К элементу с ID можно обращаться так

// agax.appendChild(img)

//событие 

xhr.onerr = function () {
    alert("Ошибка")
}