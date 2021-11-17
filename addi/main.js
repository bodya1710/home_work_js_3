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