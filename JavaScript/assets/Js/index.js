// var a = 5.5;
// var str = "Salam";
// var is = false;

// let l = undefined;
// let i = null;

// is = true;

// var arr = [5, "s", true];

// var obj = {
//   firstname: "Muha",
//   lastname: "Mikayilov",
//   isMarried: false,
// };

// let b = 6;
// let strTwoThree = "sss";

// const c = 5;

// console.log("b:", b);

// // c = 10;

// b = 7;

// console.log("A:", a);
// console.log("Obj", obj);
// console.log("b:", b);
// console.log("C:", c);

// if (a === 5.4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (!obj.isMarried) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (true === true) {
//   console.log(true);
// }

// if (false === false) {
// }

// switch (c) {
//   case 6:
//     console.log("Five");
//     break;
//   case 10:
//     console.log("Ten");
//     break;
//   default:
//     console.log(c);
// }

// const students = ["Farid", "Kamran", "Ali", "Elnur"];

// for (let i = 0; i <= 100; i++) {
//   console.log(students[i]);
// }

// alert("This is test");
// prompt("This is test");

// let promptValue = prompt("Is");

// if (promptValue.length) {
//   console.log(promptValue);
// }

// function test() {
//   let d = 7;
//   var a = "s";
// }

// function testTwo() {
//   let d = 6;
// }

// function test(a) {
//   console.log(a);
// }

// function testTwo(a) {
//   return a + 100;
// }

// const funcResult = testTwo(250);

// console.log(funcResult);

// console.log(testTwo(225));

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiple(a, b) {
  return a * b;
}
function devide(a, b) {
  return a / b;
}

function calculation(a, b, operator) {
  switch (operator) {
    case "+":
      console.log("Toplama:", sum(a, b));
      break;
    case "-":
      console.log("Cixma:", sub(a, b));
      break;
    case "*":
      console.log("Vurma:", multiple(a, b));
      break;
    case "/":
      console.log("bolme:", devide(a, b));
      break;
    default:
      console.log("Duzgun operator teyin edilmeyib!");
      break;
  }
}

let numberFirst = Number(prompt("First"));
let numberSecond = Number(prompt("Second"));
let operator = prompt("Operator");

calculation(numberFirst, numberSecond, operator);
// calculation(5, 3, "-");
// calculation(5, 3, "*");
// calculation(5, 3, "/");
// calculation(5, 3, 6);
