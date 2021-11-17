//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
 let arr1 = [2,17,13,6,22,31,45,66,100,-18];
 let wI = 0;
// while (wI < arr1.length){
//     console.log(arr1[wI]);
//     wI++
// }

// 2. перебрати його циклом for
// for (i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// while(wI < arr1.length){
//     if (wI % 2){
//         console.log(wI);
//     }
//     wI++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for ( let i = 0; i < arr1.length; i++){
//     if (i % 2){
//         console.log(i);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// while (wI < arr1.length){
//     if (!(arr1[wI] % 2)){
//         console.log(arr1[wI]);
//     }
//     wI++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr1.length; i++) {
//     if (!(arr1[i] % 2)){
//         console.log(arr1[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr1.length; i++) {
//     if (!(arr1[i] % 3)){
//         arr1[i] = 'okten';
//     }
// }
// console.log(arr1);

// 8. вивести масив в зворотньому порядку.
// for (let i = arr1.length - 1; i >= 0; i--){
//     console.log(arr1[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//1)
let wI3 = arr1.length - 1;
// while (wI3 >= 0){
//     console.log(arr1[wI3]);
//     wI3--
// }

//2)
// for (let i = arr1.length - 1; i >= 0; i--) {
//  console.log(arr1[i]);
// }

//3)
// while(wI3 >= 0){
//     if (wI3 % 2){
//         console.log(wI3);
//     }
//     wI3--
// }

//4)
// for (let i = arr1.length - 1; i >= 0; i--) {
//      if (i % 2){
//       console.log(i);
//      }
// }

//5)
// while (wI3 >= 0){
//     if (!(arr1[wI3] % 2)){
//         console.log(arr1[wI3]);
//     }
//     wI3--
// }

//6)
// for (let i = arr1.length - 1; i >= 0; i--) {
//     if (!(arr1[i] % 2)){
//         console.log(arr1[i]);
//     }
// }

//7)
// for (let i = arr1.length - 1; i >= 0; i--) {
//     if (!(arr1[i] % 3)){
//         arr1[i] = 'okten';
//     }
// }
// console.log(arr1);