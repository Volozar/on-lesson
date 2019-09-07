//синтаксис ПРОМЕСИ это такой объект который имеет три состояния:
//pending, resolve, reg

function githubUser(url) {
    return new Promise(function (res, req) {
        const xhr = new XMLHttpRequest()
        xhr.open("Get", url)
        xhr.onload = function (data) {
            res(data)
        }

        xhr.onerror = function (error) {
            req(error)
        }
        xhr.send()
    })
}

/* githubUser('http://api.github.com/users/volozar')
.then(data => console.log(data))
.catch(error => console.log(error)) */

// setTimeout(() => console.log('Bye'), 100)
// console.log('Privet')

//===ФЕТЧ====содержит внутри уже и промис и http реквест (тоже самое что и выше githubUser)
fetch('http://api.github.com/users/volozar')
    .then(data => /* console.log */(data))
    .catch(error => console.log(error));

//Запросы GET, POST, DELETE, PUT
//у GET запросов нет body

//Полифилд для Фетча (замена метода)
function fetchStormnet(url, method, data) {
    return new Promise(function (res, req) {
        const xhr = new XMLHttpRequest()
        if (!method) {
            xhr.open('Get', url)
        } else {
            xhr.open(method, url, data)
        }
        xhr.onload = function (data) {
            res(data)            
        }
        xhr.onerror = function (error) {
            req(error)
        }
        xhr.send()
    })
}

fetchStormnet('http://api.github.com/users/volozar')
.then(data => /* console.log */(data))
    .catch(error => console.log(error))

//===Еще однин способ чтобы функции выполнялись попорядку, вместо промисов. Первый метод должен содержать промис, используем fetch т.к. он по умолчанию возвращает промис 
/* const async myFunctin(){
    const data = await fetch()
    const user = await getUser(data)
    }  */

//all возвращает массив из всех данных    
console.log(Promise.all(
    [
        fetch('http://api.github.com/users/hotaru'),
        fetch('http://api.github.com/users/gitkoshelew'),
        fetch('http://api.github.com/users/volozar')
    ]
))
// race возвращает того кто первый загрузится
Promise.race(
    [
        fetch('http://api.github.com/users/hotaru'),
        fetch('http://api.github.com/users/gitkoshelew'),
        fetch('http://api.github.com/users/volozar')
    ]
)
    .then(res => console.log(res))

//=================================================

const user = document.getElementById('user');
const send = document.getElementById('send');

send.onclick() = function (user) {

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://api.github.com/users/' + user)
    xhr.onload = function (data) {
        // console.log(data.currentTarget.response)
        const response = data.currentTarget.response;
        const responseObj = JSON.parse(response);
        console.log(responseObj.message);
        responseObj.message.forEach(element => {
            img = document.createElement('img')
            img.src = element;
            agax.appendChild(img)
        });
        img.src = responseObj.avatar_url;
    }
}
const API = 'https://dog.ceo/api/breed/hound/images/random/20';

    /* function getUser(url) {
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
    
    } */