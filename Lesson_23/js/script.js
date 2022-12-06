let numberCase = 5 + 8;

console.log(numberCase);

let numberOne = 5 * 8;

console.log(numberOne);

let numberTwo = 7 - 3;

console.log(numberTwo);

let numberThree = 10 % 3;
console.log(numberThree);
console.log(typeof numberThree)

let userAge = '16'
let userName = '30';
console.log(+userName + +userAge)
console.log(userName);

let resultOne = ''
console.log(resultOne)

let a = 2 + 3;
let b = 2;

let result = 8 - (a = b = 5)
console.log(result);

result *= 5;
console.log(result);
result -= 5;
console.log(result);
result = (2 + 2, 50 - 40);
console.log(result);

result = 2 < 5;
console.log(result);
result = 2 > 5;
console.log(result);
result = 2 >= 5;
console.log(result);
result = 2 <= 5;
console.log(result);

result = 'W' > 'A';
console.log(result);

result = 'red' > 'blue';
console.log(result);

result = '80' > 10;

console.log(result);

result = '80' === 80;
console.log(result);

result = '80' !== 90;
console.log(result);

result = 0 || "100";
console.log(result);

result = 0 || "" || false || undefined || null || !true;
console.log(result);

result = "" || false || 0 || null || !true;
console.log(result);


result = "" || false || ++resultOne || null || !true;
console.log(result);

result = '1' && true && ++resultOne && null;
console.log(result);

result = 1 && 30 || 20 && !'';
console.log('' && 30 || 20 && 0);

result = (3 > 2) > 1;
console.log(result);


result = 0;
let newResult = result++;
console.log(newResult)

console.log(!false && 11 || 18 && !"");

let google = 0;
console.log(google ?? "hej");
/*
//Вариант №1
console.log('35' + - "22");
//Вернет 13
не
//Вариант №2
console.log('35' * "22");
//Вернет 770
да
//Вариант №3
console.log('558' > 22++);
//Вернет true
не
//Вариант №4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
не
//Вернет 1

//Вариант №5
console.log(!false && 11 || 18 && !'');
нет ( (не фолс = тру && 11 = тру) = 11 (18 = тру ?? не фолс = тру)= тру   (11 // тру) = 11) )
//Вернет 18

//Вариант №6
let name = 0;
console.log(name ?? "Без имени")
да
*/


let numberReslt = 5;

for (numberReslt = 10; numberReslt < 15; numberReslt++) {
    console.log(numberReslt);
    if (numberReslt == 12) break;
};
for (numberReslt = 10; numberReslt < 15; numberReslt++) {
    if (numberReslt == 12) continue;
    console.log(numberReslt);
};
firstFor: for (numberReslt = 10; numberReslt < 15; numberReslt++) {
    if (numberReslt == 12) break firstFor;
    console.log(numberReslt);
};
firstFor: for (numberReslt = 10; numberReslt < 15; numberReslt++) {
    if (numberReslt == 12) continue firstFor;
    console.log(numberReslt);
};


let num = 0
while (num < 3) {
    console.log(`Число: ${num}`)
    num++
}

// for (let num = 0; num < 3; num++) {
// 	console.log(`Число: ${num}`);
// }

First: for (let num = 0; num < 2; num++) {
    //Цикл №2
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) break First;
    }
}

let resultfour = 'hej'
if (false && 1 || true && false) {
    console.log(resultfour);
} else {
    resultfour = "hej hej"
    console.log(resultfour);
}

let five = (10 > 5) ? "siema" : "Narka";
console.log(five);

let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

let j = 92 > '11';
console.log(typeof Boolean);
console.log(j);

let y = 58 < 100;
console.log(y);

if (0) {
    console.log('Ложь!');
} else if (" ") {
    console.log('Истина!');
}
let one = Math.ceil(3.2213 * 10) / 10;
console.log(one);


for (let cyclNumbers = 1; cyclNumbers < 6; cyclNumbers++) {
    console.log(cyclNumbers)
}



// Задача №1
// Вывести в консоль числа от 1 до 5


/*
// Задача №2
let num = 8;
while (num) {
    //Последний результат 0, верно?
    console.log(num);
    num--;
}
ні значення 0(False) зупинить інтернацию і не виведе 0
//Задача №3. Переписать на while

for (let num = 0; num < 3; num++) {
    console.log(`Число: ${num}`);
}

let num = 0
while (num < 3) {
    console.log(`Число: ${num}`)
    num++
}
//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
for (let num = 0; num < 3; num++) {
    //Цикл №2
    for (let size = 0; size < 3; size++) {
        console.log(size);
}
First: for (let num = 0; num < 2; num++) {
    //Цикл №2
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) break First;
    }
}
}*/
// sizeStop: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         console.log(size);
//         if (size == 1) break sizeStop;
//     }
// }

let nameOne = '';
console.log(nameOne ?? "Без имени");

let varWord = `VS Code\nVS Code\n\tVS\n\tCode\n\tVS Code\n\tVS Code\n\tVS Code\n\tVS Code\n\t\t\tVS Code`;
console.log(varWord);

let varWords = `Stroka`;
console.log(varWords.length);

let text = `hello world`;
let firstText = text[1];
let lastText = text[text.length - 1];
console.log(firstText);
console.log(lastText);
for (const char of text) {
    console.log(char);
}
console.log(text.toUpperCase());
console.log(text.indexOf(`wor`));
console.log(text.includes(`w`));
console.log(text.startsWith(`hel`));
console.log(text.endsWith(`ld`));
console.log(text.slice(1, 2));
console.log(text.slice(-3, -2));


let varNumberOne = 5.1213;
console.log(varNumberOne);
console.log(varNumberOne.toFixed(4));
console.log(typeof varNumberOne);

let varNum = 1.005 + Number.EPSILON;
let varNumResl = Math.round(varNum * 100) / 100;
console.log(varNumResl);

varNumberOne = `150.2134px`;
console.log(varNumberOne);
console.log(isNaN(varNumberOne));
console.log(isFinite(varNumberOne));

console.log(parseInt(varNumberOne));
console.log(Math.max(30, 100, 299, 193, -12312, 213213));
console.log(Math.min(-213213 - 4412421414, -56543534, 12312312));
console.log(Math.pow(5, 3));



let firstResult = Math.round((1.005 + Number.EPSILON) * 100) / 100;
if (
    firstResult === 1.01) {
    console.log(firstResult)
};


let value = 58 + "Фрилансер";
if (isFinite(value)) {
    console.log('Результат выражения NaN');
} else if (isNaN(value)) {
    console.log('Результат выражения NaN');
};

console.log(Math.max(10, 58, 39, -150, 0));


let varNumberTwo = 58.858;
console.log(Math.floor(varNumberTwo));


let textFreelace = 'фрилансер';

if (textFreelace.indexOf(`н`)) {
    console.log(textFreelace.slice(5, 6));
}

console.log(textFreelace[textFreelace.length = 5]);

if (textFreelace.includes(`н`)) {
    console.log(textFreelace.slice(-4, -3))
}





console.log(textFreelace.toLocaleUpperCase());



if (textFreelace.includes(`лан`)) {
    console.log(textFreelace.slice(3, 6));
}

text = 'фрилансер';
console.log(text.includes('лан', 4));



function showMessage() {
    console.log(`hej`);
}

if (2 > 1) {

    let rondomNum, rondomNumTwo;

    function getSumm() {
        rondomNum = 10;
    }
    function getSummTwo() {
        rondomNumTwo = 20;
    }
    getSumm()
    getSummTwo()
    let rondomresult = rondomNum + rondomNumTwo;
    console.log(rondomresult)
}


function calcSum(l, k) {
    let t = l + k;
    console.log(t);
}

calcSum(1, 5);


function calcnum(numbOne, numbTwo, more, less) {
    let numbSum = numbOne + numbTwo;
    if (numbSum > 3) {
        more();
    } else {
        less()
    }
}
function showMoreMessage() {
    console.log(`Больше чем 3`);
}
function showLessMessage() {
    console.log(`Меньше чем 3`)
}

calcnum(3, 1, showMoreMessage, showLessMessage);

function calcSumTwo(varLetNum, varLetNumb) {
    let numSumm = varLetNum * varLetNumb;
    return numSumm
}

let funRezult = calcSumTwo(2, 5);
console.log(`lflflflflf ++++ ${funRezult}`)


function funSumm(funNum, funNumb) {
    let funRez = funNumbs(funNum, funNumb);
    console.log(`YRAAAA + ${funRez}`)
}


function funNumbs(funNum, funNumb) {
    return funNum + funNumb;
}
funSumm(4, 7);


// function varFunOne(varFunNumbOne, varFunNumbTwo) {
//     let result = 1;

//     for (let i = 0; i < varFunNumbTwo; i++) {
//         result *= varFunNumbOne;
//     }
//     return result;
// }

// console.log(varFunOne(2, 3));

function calcCalc(oneNum, twoNum) {
    if (twoNum === 1) {
        return oneNum;
    } else {
        return oneNum * calcCalc(oneNum, twoNum - 1);
    }

}

console.log(calcCalc(2, 5));


// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }
// console.log(calcSumm(2, 3));
if (2 > 1) {
    function showFunText() {
        let textFunOne = `jo jo`;
        if (textFunOne.includes(`jo`)) {
            console.log(`Я фукция`);
        }
    }
}
showFunText()
// function showFunText() {
//     let textFunOne = `jo jo`;
//     if (textFunOne.includes(`jo`)) {
//         console.log(`Я фукция`);
//     }
//     console.log(`hej`);
// }
// showFunText()

if (2 > 1) {
    function showFunText() {
        console.log(`text`);
    };
}
showFunText()


// let culcFunText = (varTextOne = `Шта`, varTextTwo = `Поденьгам`) => {
//     varTextOne + ', ' + varTextTwo + '!';
//     console.log(`${varTextOne}, ${varTextTwo}`);
// }

// // console.log(culcFunText(`Шта`, `Поденьгам`));

// setTimeout(culcFunText, 3000, `Шта`, `Поденьгам`);

// function calcNumTimer(timer) {
//     console.log(`${timer} `);
//
//     if (timer === 6) {
//         timer return;
//     }
// }
// setTimeout(calcNumTimer, 0, 1);

// let i = 0;
// let out = ' ';
// function culcFun() {
//     i++
//     out += i + ' ';
//     if (i >= 5) return
//     culcFun();
// }
// culcFun();
// console.log(out);

// for (let cyclNumbers = 1; cyclNumbers <= 5; cyclNumbers++) {
//     console.log(cyclNumbers)
// }


// sizeStop: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         console.log(size);
//         if (size == 1) break sizeStop;
//     }
// }

// let varNumCalc = 0
// while (varNumCalc < 5) {
//     varNumCalc++
//     console.log(varNumCalc);
// }
// let varNumCalc = 0
// while (varNumCalc <= 4) {
//     varNumCalc++
//     console.log(varNumCalc);
// }

let varNumCalc = 0
do {
    varNumCalc++
    console.log(varNumCalc);
}
while (varNumCalc < 5);

