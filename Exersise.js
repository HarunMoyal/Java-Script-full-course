//=====question no.1
// let hour = 0;
// let minute = 0;
// let second = 0;
// let id = setInterval (function(){
//     ++second;
//     if (second === 2){
//         ++minute
//         second = 1;
        
//     }
//     if(minute===2){
//         ++hour;
//         minute = 1;
//     }
//     console.log(`${hour}:${minute}:${second}`);
//     if (hour===2){
//         clearInterval(id);
//         console.log(`One Hour Complete`)
//     }
// },1000)

//=====================

// question no. 2

// let id1 = setInterval(function(){
//     console.log("Hello World!")
// },1000);
// setTimeout(function(){
//     clearInterval(id1);
//     console.log(`Total 10 time Print`)
// },11000);

//question no. 3
//  let num = 1;
// let id2 = setInterval(function (){
    
//     console.log(`${num}`);
//     ++num;
// },1000)
// let id3 = setInterval(function(){
//     let str = "==";
    
//         console.log(str);
        
        
//  },2000)
//  setTimeout(function(){
//     clearInterval(id2);
//     clearInterval(id3);
//  },10000)

//question no. 3
let num = 1;
let str = "==";

let FirstPrint = setInterval(() => {
  console.log(num++);
  console.log(num++);
  console.log(str);
  str += "==";
  
  if (num> 10) {
    clearInterval(FirstPrint);
    clearInterval(SecondPrint);
  }
}, 1000);

let SecondPrint = setInterval(() => {
  console.log(num++);
  console.log(num++);
  console.log(str);
  str += "==";
  
  if (num> 10) {
    clearInterval(FirstPrint);
    clearInterval(SecondPrint);
  }
}, 2000);
//=========================
//question no. 4
// function oddEven(num, fn1, fn2) {
//     if (num % 2 === 1) {
//       fn1();
//     } else {
//       fn2();
//     }
//   }
//   function odd() {
//     console.log('Number is odd');
//   }
  
//   function even() {
//     console.log('Number is even');
//   }
  
//   oddEven(6, odd, even); 
//   oddEven(10, odd, even); 


//question no. 5

// function max(num1,num2,num3){
//     if(num1 !== undefined && num2 !== undefined && num3 !== undefined){
//  return function(){
//     return console.log(Math.max(num1, num2, num3));
// };
//     }else{
//        return function (){
//         console.log("Hello World");
//        };
//     }
// }

// let a = max(2,3,4);
// console.log(a());
// let b = max();
// console.log(b());

//============================================
//question no. 6


//question no.7

// function Fibonacci(maxNumber) {
//     let num1 = 1;
//     let num2 = 1;
//   console.log(num1);
//   console.log(num2);
//     while (num2 <= maxNumber) {
//       const nextNum = num1 + num2;
//       console.log(nextNum);
//       num1 = num2;
//       num2 = nextNum;
//     }
//   }
//   Fibonacci(20);

//Question no. 8
  /*Function Declaration ka matlab hum function ko program mai declair krte hai kisi bhi naam
  se aur yeh function hoisting hote hai it's mean hum program mai function ko pahle call kar 
  sakte hai aur baad mai declair kr sakte hai 
  syntex of function declaration:-
  function add(a,b){
    return a+b
  }
  add(10,50);
Function Expression:- kisi bhi function ko varibale aur const mai declair kr sakte hai
aur yeh function hoisting nahi hote hai it's mean iss program mai declair krne ke baad hi call 
kar sakte hai
Function Expression syntex:-
let a = function add(a,b){
    return a+b;
}
Arrow Function :- yeh function single line function hota hai
const a = (a,b) => a+b;

//question no. 9*/
    