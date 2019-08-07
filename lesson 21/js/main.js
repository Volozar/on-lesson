const Nun = [1, 2, 3, 4, 5, 6, 7, 8];
const f = [];

Nun.forEach((elem) => {
    f.push(function () {
        console.log(elem);
    })
})

for (let i = 0; i < Nun.length; i++) {
    f.push(function () {
        console.log(Nun[i]);
    })
}


const o = [1, 2];
const b = [...o, 3] //... разобрал массив и вставил его в массив b
console.log(b)
//метод три точки ... разбирает массив создавая новый

const students = document.getElementsByClassName('students')
Array.prototype.forEach.call(students, function (elem) {
    elem.onclick = () => {
        console.log(elem.innerText)
    }
})

var children = ['Дима', 'Коля']
getChild(console.log(this))
//метод call заимствует функцию из одного метода для другого
function getChild() {
    this.children.forEach((element, i) => {
        console.log(element + arguments[i])
    });
}

const Vasy = {
    name: 'Vasy',
    children: ['Настя', 'Вова'],
    say: function (string) {
        console.log(string + this.name)
    },
    getChild: getChild
}


Vasy.say('Hello, ')
Vasy.getChild(' Красивый', ' умный')

const Pety = {
    name: 'Pety',
    children: ['Илья ', 'Леша '],
}

Vasy.say.call(Pety, 'Здарова, ')
Vasy.getChild.call(Pety, 'красивый', 'умный')

//вместо call можно использовать apply, он может передать массив параметров
const arrSkills = ['вежливый', 'скиловый'];
Vasy.getChild.apply(Pety, arrSkills);

//а можно использовать новый метод три точки ...
Vasy.getChild.call(Pety, ...arrSkills);

//===
const Seny = {
    name: 'Seny',
    children: ['Сергей ', 'Саня '],
    setChild: Vasy.getChild
}

Seny.setChild('ленивый', 'жадный')


//=================================================
//====================ОБЪЕКТЫ======================
//=================================================
//прототипные наследование

//конструктор животного
const Animal = function (eyes, head, steps) {
    this.eyes = eyes;
    this.head = head;
    this.steps = steps;
}

Animal.prototype.walk = function () {
    this.steps++;
    console.log(this.steps)
}

const Raccon = new Animal(2, 1, 0)
Raccon.walk()
//конструктор человека
const Man = function (name, eyes, head, steps) {    
    this.name = name;
    this.eyes = head;
    this.head = eyes;
    this.steps = steps;
}
Man.prototype = new Animal;//подключаем методы животного человеку

Man.prototype.say = function () {
    console.log(this.name)
}

Man.prototype.walk = function () {    
    Animal.prototype.walk.call(this)
    console.log(this.steps += 10)
}

// Man.prototype.__proto__ = Animal.prototype;

const Petay = new Man('Петя', 2, 1, 20)
Petay.say()
Petay.walk()


const Programmer = function (name, eyes, head, steps, counter) {    
    this.name = name;
    this.eyes = eyes;
    this.head = head;
    this.steps = steps;
    this.counter = counter;
}
Programmer.prototype = new Man;

Programmer.prototype.sum = function (a, b) {
    console.log(a + b)
}
Programmer.prototype.mult = function (c) {
    console.log(this.counter * c)
}

const Vova = new Programmer('Вова', 2, 1, 1000, 5, 3)

Vova.sum()
Vova.say()
Vova.walk()


const Troeshnik = new Programmer('Fedy', 2, 1, 1000, 5)
Troeshnik.mult(3)