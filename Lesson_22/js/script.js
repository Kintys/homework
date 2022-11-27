"use strict"

// Варіант №1
// console.log('Hello world')

// Варіант №2
// console.log('Hello world')
// console.log('JS')

// Варіант №3
// console.log('Hello world') console.log('JS')

// Варіант №4
// console.log('Hello world);
// console.log('JS'); 

let myFirstProject;

myFirstProject = ('Js')
console.log(myFirstProject)

let myFirstVariable = 'variable',
    myLifeStyle = 'freelans';

console.log(myFirstVariable);
console.log(myLifeStyle);

let myAge = '30';
let myAge2;
myAge2 = myAge;
console.log(myAge);
console.log(myAge2);

myAge = (myLifeStyle);
console.log(myAge);

if (1 > 0) {

    let userAge = 15;
    console.log(userAge);
    if (10 > 5) {
        console.log(userAge);
    }
}

let num;
if (10 > 5) {
    num = 100;
}
console.log(num);



// let userAge = 10;

if (1 > 0) {

    let userAge = 15;
    console.log(userAge);
    if (10 > 5) {
        console.log(userAge);
    }
}
// console.log(userAge);

// const BLOCK_SIZE = 25;
const COLOR_GREY = '#666';
console.log(COLOR_GREY);

const userProfile = {
    name: 'dima',
    age: 36,
    message: 'Я вчу ДЖС'
}
console.log(userProfile)

userProfile.age = 18;
console.log(userProfile)


// 1) Придумай ім'я змінної для зберігання кольору ока користувача сайту
// let userStorageEyes = 'green';

// 2) Надання Ім'я змінної.
// let userName = 'Користувач'
// let user;
// user = userName;
// console.log(user); console.log(userName);

//Варіант №1
// let user = 'Вася' let age = 36

//Варіант №2
// let myage = 36;
// console.log(myage);

//Варіант №3
// const BLOCK_SIZE = 14 + 50;
// console.log(BLOCK_SIZE);

//Варіант №4
// const BLOCK_HEIGHT = 100;
// console.log(BLOCK_HEIGHT);

//Варіант №5
// if (true) {
//     var size = 15;
// }
// console.log(size);

let userName;
console.log(typeof userName);

userName = "Я вчу ДЖС";
console.log(typeof userName);

userName = 39;
console.log(typeof userName);

userName = null;


let block = document.querySelector('.block')

console.log(block);
console.log(typeof block);

let wellYouMarryMe = true;
if (wellYouMarryMe) {
    console.log('yes')
}
else {
    console.log('no')
}

let teneOrOne = 10 > 1;
console.log(teneOrOne)

let getInfinity = 'dima' * 0;
console.log(typeof getInfinity);
console.log(getInfinity);

let bigInt = 1245513453461563463463146342345134616756875465465248853686738657254724574572547n
console.log(typeof bigInt);
console.log(bigInt);

const userInfo2 = {
    name: `Dima`,
    age: 29,
    work: `Junior Front-end Develeper`
}
console.log(typeof userInfo2);
console.log(userInfo2);

let userAge2 = 26;
console.log(typeof userAge2);
console.log(userAge2);


userAge2 = String(userAge2);
console.log(typeof userAge2);
console.log(userAge2);

let number = '55' / '20';
number = Boolean(number);
console.log(typeof number);
console.log(number);


let userHeight = 145 / 0;
//Вернется значение NaN
console.log(userHeight);



let userAge;
//Вернется тип данных Null
console.log(typeof userAge);

let userSize = "45" / "8";
//Вернется тип данных Number
console.log(typeof userSize);
