let A = [1, 2, 3, 4, 5, 6];

A.push(4);
console.log(A);

A.pop();
console.log(A);

A.shift();
console.log(A);

A.unshift(1)
console.log(A);

A = A.join(";");
console.log(A);

A = A.split(";");
console.log(A);


A.splice(0, 2);
console.log(A);

A = [2, 3, 4, 5, 8, 4];

A = A.map(function (item) {
    return item / 2;

})
console.log(A);


A.some(function (item) {
    return item % 2 == 0;

})
console.log(A);

/* A = A.every(function (item) {
    return item % 2 == 0;

})
console.log(A); */

A = A.reduce(function (acc, item) {
    return acc + item;
}, 5)
console.log(A);

let B = [
    ['a', 3],
    ['b', 2],
    ['c', 1]
];
console.log(B);

const content = document.getElementsByClassName('jsTest');
const button = document.getElementById('button');
console.log(content);
console.log(button);

// const HTML = "<p class = \"privet\">Privet</p>";

HTMLCollection.prototype.forEach = [].forEach;

content.forEach(function (item) {
    const p = document.createElement("p");
    item.appendChild(p);
    
    p.innerText = "Привет!"
    console.log(item)
});


//не работает
/* button.onclick = function () {
    content.forEach(function () {
        HTML = "";
    })
}; */


const students = ['Volody', 'Aleksei', 'Vitali', 'Ily'];

const content2 = document.getElementById('content2');
console.log(content2);

const ul = document.createElement('ul');
ul.classList.add('students-list');

students.forEach(function (item, i) {
    const li = document.createElement('li');
    li.innerText = ++i + ' ' + item;
    ul.appendChild(li);
});
content2.appendChild(ul);

const stnodes = students.map(function (item, i) {
    Element = document.createElement('div');
    Element.innerText = item + 1;
    return Element;
})

console.log(stnodes)