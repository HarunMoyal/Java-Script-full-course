// question number 1
//Write a function that takes a string and returns a new string with all the words reversed using the spread operator.




// function revers(str) {//declair string in a function
// let word = str.split(' ');//string split by space
// let reverseStr = word.map(word =>//map mai word ko daal kr her ek element pr function chalya
//      [...word].reverse().join(''));//... se word ki spread kiya aur usse reverse fun mai bhejkr jione bhi krva kiya
// let reversedString = reverseStr.join(' ');//joine mai space
// return reversedString; 
// }
// let Str = "Hello world! WeCode Academy.";

// console.log(revers(Str));


//question number 2
//Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.
// function deleteFirstWord(array) {
//     return array.splice(1);
//   }
//   let array1 = [1, 2, 3, 4, 5];

// let newArray = deleteFirstWord(array1);

// console.log(newArray); 


//question number 3
//Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

// let nested = [1,2,[3,4,6,8,9,10],[11,12],[13,14],15];
// let flate = nested.flat();
// console.log(flate);
//question number 4
//Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)======================
//question number 5
// Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.

// function OddEven(array) {
//     let oddNumbers = [];
//     let evenNumbers = [];
  
//     for (let num of array) {
//       if (num % 2 === 0) {
//         evenNumbers.push(num);
//       } else {
//         oddNumbers.push(num);
//       }
//     }
  
//     return oddNumbers.concat(evenNumbers);
//   }
  
//   let Array = [3, 8, 2, 5, 10, 7];
//   let result = OddEven(Array);
//   console.log(result); 

//question number 6
//Create an array of numbers. Now change the position of each element with their next element.
// function RightToLeft(array) {
//     for (let i = 0; i < array.length - 1; i += 2) {
//       let temp = array[i];//temp mai 1,3,5,7,9 store hua
//       //console.log(temp)
//       array[i] = array[i + 1];
      
//       array[i + 1] = temp;
      
//     }
//   }
  
//   let numbers = [1, 2, 3, 4, 5, 6, 7,8,9,10];
//   RightToLeft(numbers);
//   console.log(numbers); 
  
//question number 7:-

// let age = 12;
// let mobile = '9581894461';
// let address = 'Jaipur';

// let Object = {
//   [`age${age}`]: age,
//   [mobile]: 'Mobile',
//   [`${address}${age}Address`]: address
// };

// console.log(Object);

//question number 8:-
// Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.
// function sum(array) {
   
//     let sum = 0;
//     for (let number of array) {
//       sum += number;
//     }
//     return sum;
//   }
//   let numbers = [1, 2, 3, 4, 5];

// console.log(sum(numbers));

//question number 9
//Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible.

// let num = 12;
// let number = num>80? 100:200;
// console.log(number);

//question number 10

// let arr = [1,2,3,4,5,67,89,66];
// let arr1 = [];
// for(let num of arr){
//     if(num%2===0){
//         arr1.push(1);
//     }else{
//         arr1.push(0);
//     }
// }
//   console.log(arr1);

// question number 11

// let prices = [10, 20, 30, 40, 50];

//  pricesWithGST = prices.map((price) => {
  
//   let tax = price * 10/100;

//   let priceWithTax = price + tax;

  
//   return priceWithTax;
// });
// let price2 = [20,50,70,80,100]
// console.log(pricesWithGST); 

// question number 12
// Given an array of strings, use reduce to return the total number of characters in all the strings

let Array = ['Welocme','in','Wecode','Academy'];

let totalWords = Array.reduce((accumulator, currentString) => {
  return accumulator + currentString.length;
}, 0);

console.log(totalWords); // Output: 20
