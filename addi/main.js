//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr1 = [];
let arrN = 0;
// for (let i = 1; i > 0; i++) {
//       if (!(i % 2))  {
//           arr1[arrN] = i;
//           arrN++
//           if (arr1.length === 50)
//               break
//       }
// }
//b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1; i > 0; i++) {
//     if (i % 2)  {
//         arr1[arrN] = i;
//         arrN++
//         if (arr1.length === 50)
//             break
//     }
// }
//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr2 = [];
// for (let i = 0; i < 20; i++) {
//     arr2[i] = Math.floor(Math.random() * 1000);
// }
//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS
for (let i = 0; i < 20; i++) {
    arr2[i] = Math.floor((Math.random() * 732) + 8);
}

//2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr2 .length; i+=3) {
//     console.log(arr2[i])
// }
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < arr2 .length; i+=3) {
//     if (!(arr2[i] % 2)){
//         console.log(arr2[i])
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr3 = [];
// let numArr = 0;
// for (let i = 0; i < arr2 .length; i+=3) {
//     if (!(arr2[i] % 2)){
//         arr3[numArr] = arr2[i];
//         numArr++
//     }
// }
// console.log(arr3);
// console.log(arr2);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr4 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr4.length; i++) {
//     let nexti = i + 1;
//     if (!(arr4[nexti] % 2) && !(arr4[nexti] === undefined)){
//         console.log(arr4[i]);
//     }
// }
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr5 = [100,250,50,168,120,345,188];
// let number = arr5.length;
// let sum = 0;
// for (let i = 0; i < arr5.length ; i++) {
//     sum = sum + arr5[i];
// }
// let res = sum / number;
// console.log(number);
// console.log(sum);
// console.log(res);

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr6 = [];
// for (let i = 0; i < 20; i++) {
//     arr6[i] = Math.floor(Math.random() * 1000);
// }
// let arr7 = [];
// let counterAr = 0;
// for (let i = 0; i < arr6.length; i++) {
//     arr7[counterAr] = arr6[i] * 5;
//     counterAr++
// }
// console.log(arr6);
// console.log(arr7);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr8 = ['sds', 1 , 4, ' sfsdcs', true, false, 'xfvdfv', 65, 89];
// let arr9 = [];
// let counterAr = 0;
// for (let i = 0; i < arr8.length; i++) {
//     if (typeof arr8[i] === 'number'){
//         arr9[counterAr] = arr8[i];
//         counterAr++
//     }
// }
// console.log(arr8);
// console.log(arr9);
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//  let arr6 = [];
//  for (let i = 0; i < 10; i++) {
//     arr6[i] = Math.floor(Math.random() * 1000);
// }
// for (let i = 0; i < arr6.length; i++) {
//     if (!(arr6[i] % 2)){
//         console.log(arr6[i]);
//     }
// }
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//  let arr6 = [];
//  for (let i = 0; i < 10; i++) {
//     arr6[i] = Math.floor(Math.random() * 1000);
// }
//  let arr = [];
//  let counterArr = 0;
// for (let i = 0; i < arr6.length; i++) {
//     arr[counterArr] = arr6[i];
//     counterArr++
// }
// console.log(arr6);
// console.log(arr);


//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     for (const city of citiesWithId) {
//         if (city.user_id === user.id){
//             user.city = city;
//         }
//     }
// }
// console.log(usersWithId);




//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
 let arr = [ 'a', 'b', 'c'];
 let word = ' ';
// for (let i = 0; i < arr.length; i++) {
//     word = word + arr[i];
// }
// console.log(word);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let a = 0;
// while (arr.length > a){
//     word = word + arr[a];
//     a++
// }
// console.log(word);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (const a of arr) {
//     word = word + a;
// }
// console.log(word)