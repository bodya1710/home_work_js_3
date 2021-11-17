//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ['hi', 'what', 'are', 'you', 'doing'];
// let arr3= [false, 'hello' , true, 'if', true, 17, 22, 45,  'you', true, 'take', 34, 76, false, 'fall']
// console.log(arr3);
// for (let i = 0; i <arr3.length; i++) {
//     console.log(arr3[i]);
// }

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let arr4 = [];
// arr4[0] = 12;
// arr4[1] = true;
// arr4[2] = 'true';
// arr4[3] = 56;
// arr4[4] = 'mmmmm';
// arr4[5] = 'ho ho ho';
// for (let i = 0; i <arr4.length; i++) {
//     console.log(arr4[i]);
// }
// console.log(arr4);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>alarm</div>`)
// }
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>коробка ${i}</div>`)
// }
let wI = 0
// while (wI < 20){
//     document.write(`<h1>Just do it </h1>`)
//     wI++
// }
// while (wI < 20){
//     document.write(`<h1>хоп хоп${wI}</h1>`)
//     wI++
// }
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr5 = [12, 45, 23, 12, 43, 56, 78, 98, 100, 76];
// for (let i = 0; i < arr5.length; i++) {
//     console.log(arr5[i]);
// }
// let arr6 = ['er', 'ua', 'en', 'ru', 'i', 'gre', 'tr', 's', 'lk', 'we'];
// for (let i = 0; i < arr6.length; i++) {
//     console.log(arr6[i]);
// }
// let arr7 = [true, 1, 4, false, 'root', 'heh', true, 5, 9, 'sss'];
// for (let i = 0; i < arr7.length; i++) {
//     console.log(arr7[i]);
// }
// let arr8 = [true, false, 14, 23, 'wow', 'lich', 2, true, 5, false ];
// for (let i = 0; i < arr8.length; i++) {
//     if ( typeof arr8[i] === "boolean"){
//         console.log(arr8[i]);
//     }
// }
// let arr9 = [56, 34, true, 23, 'wow', 'tttt', 12, 54, true, false ];
// for (let i = 0; i < arr9.length; i++) {
//     if ( typeof arr9[i] === "number"){
//         console.log(arr9[i]);
//     }
// }
// let arr10 = ['true', 32, 'opp', 34, 'wow', 'lich', 2, 'go', 5, 1 ];
// for (let i = 0; i < arr10.length; i++) {
//     if ( typeof arr10[i] === "string"){
//         console.log(arr10[i]);
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let arr11 = [];
// arr11[0] = 12;
// arr11[1] = '12';
// arr11[2] = true;
// arr11[3] = 'lol';
// arr11[4] = 34;
// arr11[5] = 'hot';
// arr11[6] = 'finger';
// arr11[7] = 10;
// arr11[8] = false;
// arr11[9] = -12;
// for (let i = 0; i <arr11.length; i++) {
//     console.log(arr11[i]);
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(`${i} `);
// }
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(`${i} `);
// }
// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(`${i} `);
// }
// for (let i = 1; i <= 100; i++) {
//     if (!(i % 2)){
//         console.log(i);
//         document.write(`${i} `);
//     }
//
// }
// for (let i = 1; i <= 100; i++) {
//     if (i % 2){
//         console.log(i);
//         document.write(`${i} `);
//     }
//
// }