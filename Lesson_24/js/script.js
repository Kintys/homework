'use strict'

// let arrOne = Array("Vasia", "Kolia", "Pietia");

// console.log(arrOne);


// let arrtwo = [
//     "Vasia",
//     "Kolia",
//     "Pietia",];
// console.log(arrtwo[0], arrtwo[2]);

// let arrThree = [
//     "Kolia",
//     {
//         name: "ihor",
//         age: 30
//     },
//     true,
//     function funArr() {
//         console.log(`Privet`);
//     },
// ];

// console.log(arrThree[1].age);
// arrThree[3]();
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(matrix[1][2])

// let arrFour = ["marcin", "łukasz", "krystian"];
// // console.log(arrFour);
// // let arrNewFour = arrFour;
// // arrNewFour.length = 2;
// // console.log(arrFour);
// arrFour.unshift("daniel", "dorota");
// console.log(arrFour);

// arrFour.splice(4, 1);
// arrFour.splice(-1, 1);
// let arrRemoved = arrFour.splice(-1, 1);
// console.log(arrRemoved);
// arrFour.splice(0, 1, "marek");
// arrFour.splice(0, 0, "andrzej", "grzegosz")
// arrFour.splice(-1, 0, "andrzej", "grzegosz")

// console.log(arrFour);

// let arrFive = arrFour.slice(3, 4);

// console.log(arrFive);
// arrFive = arrFour.slice();
// console.log(arrFive);

// arrFive = arrFour.concat('michał');
// console.log(arrFive);

// let arrSix = ["marek", "łukasz", "marcin", "daniel"];

// let resultArr = arrSix.find(function (item, index, array) {
//     return item.name === "Marek";
// });
// console.log(resultArr);

// resultArr = arrSix.find(item => item.name === "Marek");
// console.log(resultArr);

// // let resultArr = arrSix.find(item => item.name === "Marek");
// resultArr = arrSix.filter(item => item.age >= 37);
// console.log(resultArr);


// console.log(arrSix.sort());



// let arrSeven = [99, 54, 78, 22, 18];
// function culcArrSeven(a, b) {
//     // if (a > b) return 1;
//     // if (a == b) return 0;
//     // if (a < b) return -1;
//     return a - b;
// }


// console.log(arrSeven.sort(culcArrSeven));
// console.log(arrSeven.sort((a, b) => a - b));+
// let arrSix = ["marek", "łukasz", "marcin", "daniel"];
// let result = arrSix.map(function (item, index, array) {
//     return item[2];
// });
// console.log(result);

// let str = "Łukasz,Marek,Marcin";
// let arrTen = str.split(",");
// console.log(arrTen);
// arrTen = str.split(",", 2);
// console.log(arrTen);


// let obj = {};
// let arr = [];


// if (Array.isArray(arr)) {
//     console.log('Я масив');
// } else (console.log('я не масив'))

// let arrSix = ["marek", "łukasz", "marcin", "daniel"];
// for (let i = 0; i < arrSix.length; i++) {
//     console.log(arrSix[i]);
// }

// for (let arrItem of arrSix) {
//     console.log(arrItem)
// }

// arrSix.forEach(function (item, index, array) {
//     console.log(item);
// })
// let i;
// function calcArr() {
//     i = 0;
//     i++;
//     if (i => arrSix.length) return
//     calcArr()

// }
// console.log(calcArr(arrSix));

// let arrSix = ["marek", "łukasz", "marcin", "daniel"];
// let reduceValueOne = arrSix.reduce(function (previousValue, item, index, array) {
//     return item + previousValue
// }, 0);
// console.log(reduceValueOne);

let users = ["Ваня", "Иштан"];
users.push = "Оля";
console.log(users);


let resultIndex = users.indexOf("Иштан");
console.log(resultIndex);

users.splice(1, 2, "Петя");
console.log(users);
resultIndex = users.indexOf("Ваня");
console.log(resultIndex);

let deleteUsersOne = users.shift();
console.log(deleteUsersOne);

users.unshift("Миша", "Паша");
console.log(users);

let arr = ['Ваня', 'Иштван', 'Оля',];
let deleteUsers = arr.splice(0, 1);
console.log(deleteUsers);


let str = 'Ваня,Иштван,Оля';
let arrTwo = str.split(",");
console.log(arrTwo);


// const htmlElement = document.documentElement;
// const bodyElement = document.body;
// const headElement = document.head
// console.log(bodyElement);
// console.log(headElement);
// console.log(htmlElement);
// const elementBody = document.body;
// const bodyElelentOne = elementBody.firstChild;
// const bodyElelentTwo = elementBody.lastChild;
// console.log(bodyElelentOne);
// console.log(bodyElelentTwo);

// const bodyElelentThree = elementBody.childNodes;
// console.log(bodyElelentThree);


// for (let node of bodyElelentThree) {
//     console.log(node);
// };
// const bodyElement = document.body;

// const a = bodyElement.previousElementSibling;
// const b = bodyElement.nextElementSibling;
// const c = bodyElement.parentElement;

// console.log(a);
// console.log(b);
// console.log(c);

// const bodyElement = document.body;

// const elementBody = bodyElement.children;
// console.log(elementBody);

// const bodyElementOne = bodyElement.firstElementChild;
// const bodyElementTwo = bodyElement.lastElementChild;
// console.log(bodyElementOne);
// console.log(bodyElementTwo);

// const elementOne = document.querySelectorAll('.lesson__text');
// console.log(elementOne);


// const elementTwo = document.querySelectorAll('p');
// console.log(elementTwo);


// const elementThree = document.querySelectorAll('p.lesson__text--red');
// console.log(elementThree);

// const elementFour = document.querySelectorAll('lesson__text--red>p');
// console.log(elementThree);

// const elementFive = document.querySelectorAll('[class]');
// console.log(elementFive);

// const elementSix = document.querySelectorAll('[class="lesson__one"]');
// console.log(elementSix);
// const elems = document.querySelectorAll('p');
// console.log(elems[2]);

// for (const item of elems) {
//     console.log(item);
// };

// const subList = document.querySelectorAll('section');
// const subItems = subList[0].querySelectorAll('p');
// console.log(subItems);

// const lessonText = document.querySelector(`.lesson__text`);
// console.log(lessonText);

// const elem = document.getElementById(`nav`);
// console.log(lessonText);


// const elem = document.querySelector('.menu__link');
// const parentList = elem.closest('.menu');
// console.log(parentList);

// const textElement = document.querySelector('.lesson__one');

// const textElementCont = textElement.textContent;
// console.log(textElementCont);

// textElement.innerHTML = `<p> ${textElementCont}</p> <p>
// Вася Вася Вася Вася Вася Вася Вася  <span style="font-size: 70px">Вася Вася Вася Вася</span > Вася Вася Вася Вася Вася  Вася Вася
// </p>`;
// console.log(textElement.innerHTML);

// textElement.textContent = `Вася`;

// const newElement = document.createElement(`div`);
// console.log(newElement);

// newElement.innerHTML = `CDSLADKLASDLASDJASDASDASDASDASD`;

// // textElement.before(newElement);
// textElement.append(newElement);
// textElement.insertAdjacentHTML(
//     `beforeend`,
//     `<p>Вася вася вася 
//     </p>`
// );

// const lessonBlock = document.querySelector(`.lesson__one`);
// lessonBlock.remove();

// const title = lessonBlock.cloneNode(true);


// // lessonBlock.prepend(title)
// const mainTitile = document.querySelector(`.jojo`);
// mainTitile.prepend(title)
// const lessonBlock = document.querySelector(`.lesson__one`);

// lessonBlock.classList.remove(`lesson__one`);

// // lessonBlock.classList.add(`lesson__one`);
// if (lessonBlock.classList.contains(`lesson__one`)) {
//     lessonBlock.style.color = "red";
// } else {
//     lessonBlock.style.color = "blue";
// }
// lessonBlock.style.cssText = `
// margin-bottom: 30px;
// color: red;
// `;
// const elementStyle = getComputedStyle(lessonBlock);
// console.log(elementStyle.marginBottom);
// const elementMarginBottom = parseInt(elementStyle.marginBottom);
// console.log(elementMarginBottom);
// console.log(typeof elementMarginBottom);
// lessonBlock.removeAttribute(`class`, `lesson__one`);
// console.log(lessonBlock);
// lessonBlock.hidden = true;


const dataElementOne = document.querySelector('[data-say-hi]');
const dataAttribute = dataElementOne.getAttribute('data-say-hi');
console.log(dataAttribute);




const ulElem = document.querySelectorAll('li');
for (let le of ulElem) {
    if (le.textContent === 'Йончи') {
        console.log(le.textContent);
    }
}
for (let i = 0; i < ulElem.length; i++) {
    if (ulElem[i].textContent === 'Йончи') {
        console.log(ulElem[i].textContent);
    }
}
ulElem.forEach(ulElem => {
    if (ulElem.textContent === 'Йончи') {
        console.log(ulElem.textContent);
    }
});


const collectElelement = document.querySelectorAll('.like');
console.log(collectElelement);


const collect = document.getElementsByClassName('like');
console.log(collect);




const list = document.querySelector('.list');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
);



const mainElement = document.documentElement;
const mainElementW = mainElement.clientWidth;
const mainElementH = mainElement.clientHeight;


const windowWidth = window.innerWidth
const windowHeight = window.innerHeight;

console.log(windowWidth - mainElementW);






function setScroll() {
    window.scrollTo({
        top: 7100,
        left: 0,
        behavior: "smooth",
    });
    const showWind = window.scrollY;
    console.log(showWind);
};
setTimeout(setScroll, 3000);



// function a() {
//     const x = window.scrollX;
//     const y = window.scrollY;
//     console.log(x);
//     console.log(y);

// };
// setTimeout(a, 1000);


const showLessonScrollEle = document.querySelector(`.lesson__scroll-one`);
const getElementCoordsLeft = showLessonScrollEle.getBoundingClientRect().left;
const getElementCoordsTop = showLessonScrollEle.getBoundingClientRect().top;

console.log(getElementCoordsLeft, getElementCoordsTop);

const showLessonScrollTwo = document.querySelector(`.lesson__scroll-two`);
const getCoordsLeftTwo = showLessonScrollTwo.getBoundingClientRect().left;
const getCoordsTopTwo = showLessonScrollTwo.getBoundingClientRect().top;

console.log(getCoordsLeftTwo, getCoordsTopTwo);

const showLessonScrollThree = document.querySelector(`.lesson__scroll-three`);
const getThreeCoordsLeft = showLessonScrollThree.getBoundingClientRect().left;
const getThreeCoordsTop = showLessonScrollThree.getBoundingClientRect().top;

console.log(getThreeCoordsTop, getThreeCoordsLeft);

console.log(showLessonScrollEle.offsetTop, showLessonScrollEle.offsetLeft);
console.log(showLessonScrollTwo.offsetTop, showLessonScrollTwo.offsetLeft);
console.log(showLessonScrollThree.offsetTop, showLessonScrollThree.offsetLeft);




