//const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//=======================================================
//Exercice 1
// for (let i = 0; i <= nombres.length; i++) {
//     console.log(nombres[i]);
// }


// for (const element of nombres) {
//     console.log(element);
// }

// nombres.forEach(element => console.log(element));

//========================================================
//Exercice 2
// var squareArray = [];


// for (let i = 0; i < nombres.length; i++) {
//     let square = nombres[i] * nombres[i];
//     squareArray.push(square);
// }

// console.log(squareArray);

// const squaremap = nombres.map(x => x * x);

// console.log(squaremap);

//=========================================================
//Exercice 3

// const nombres = [50, 2000, 400, 1];


// nombres.sort(function (a, b) {
//     return a - b;
// });

// console.log(nombres)

//===========================================================
//Exercice 4
// const nombres = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
// let evens = [];
// for (element in nombres) {
//     if (element % 2 == 0) {
//         evens.push(element);
//     }
// }
// console.log(evens)


// evens = nombres.filter(number => number % 2 == 0);
// console.log(evens);

//===============================================================
//Exercice 5
// const nombres = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];

// let isOdd = nombres.find(element => element % 2 != 0)
// if (isOdd != undefined) {
//     isOdd = true;
//     console.log(isOdd);
// } else {
//     isOdd = false;
//     console.log(isOdd);
// }

//console.log ( nombres.some(element => element % 2 != 0))

//=================================================================
//Exercice 6

// const nombres = [11, 14, 29, 4, 18, 12, 1, 2, 6, 3];

// let multiply = 1;

// for (element of nombres) {
//     multiply *=  element;
// }
// console.log(multiply);

// const reducer = (previousValue, currentValue) => previousValue * currentValue;

// console.log(nombres.reduce(reducer));

//======================================================================
//Exercice 7

// const personnes = [
//     { nom: 'Dupont', prenom: 'Maxime', age: 14 },
//     { nom: 'Dubois', prenom: 'Aurélien', age: 16 },
//     { nom: 'Duriez', prenom: 'Eric', age: 19 },
//     { nom: 'Dutrain', prenom: 'Jean', age: 21 },
//     { nom: 'Dutronc', prenom: 'Grégoire', age: 18 }
// ];

// for (let i = 0; i<personnes.length; i++){
//     if (personnes[i]['age'] >= 18) {
//         console.log(personnes[i]['nom'] + " " + personnes[i]['prenom'] + " a " + personnes[i]['age'] + " ans.");
//     }
// }

// const majeurs = personnes.filter(p => p.age >= 18);
// console.log(majeurs);

// let mediumAge = console.log(personnes.reduce((acc, personne) => acc + personne.age, 0) / personnes.length);
// console.log(mediumAge);

// const decroissant = personnes.sort((p1, p2) => p2.age - p1.age);
// console.log(decroissant);

