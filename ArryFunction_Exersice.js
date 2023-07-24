// // question no 1
 let num =[20,30,50,149,220,360,690,23,10,1,55];
 let str = ["jamil","Saad","Wecode","aadil","Aslam","Rafik","Rashid Khan","Taiyeb","Vakil_Khan","Farman","Ashfaqmohammed"];

// let fnd = num.find((value)=>{
//     return value>20;
// });
// console.log("In Find Function",fnd);
// console.log("In forEach function");
// let forEch = num.forEach(value => {
//     if(value>20){
//         console.log(value);
//     }
// });
// //question no. 2
// let fnd1 = str.find((value)=>{
//     return value.length>10
// });
// console.log("Find Function",fnd1);
// console.log("forEach Function");
// let fnd2 = str.forEach(value =>{
//     if(value.length>10){
//         console.log(value);
//     }
// });

// // question no. 3
// console.log("Filter Function >100 Numbers")
// num.filter((value)=>{
// if(value>100){
//     console.log(value)
// }
// });

// //question no 4

// console.log("Filter Function <50*5:");
// num.filter((value)=>{
//     if(value<50){
//         console.log(value*5)

//     }
// });

// //question number 5



// //question number 6
// let sum = num.reduce((num1, num2) => {
    
//     return num1 + num2;
    
//   });
//   console.log("Total Of All Numbers",sum);

//   //question number 7


  


// //   let str = ["jamil", "Saad", "wecode", "aadil", "Aslam", "Rafik", "Rashid Khan", "Taiyeb", "Vakil_Khan", "Farman", "Ashfaqmohammed"];

  
//      let str1 = str.reduce((count, word) => {
    
//     if(word.length>5){
//          count++;
//     }
//     return count;
    
//     }, 0);
  
  
  
//   console.log("Reduce =>Total words with length > 5:", str1); 
  

//   let str2 = str.filter((word)=>{
//      let count =[];
//     if(word.length>5){
//        return count.push(word);
//     }
    
//     });
//     console.log("Filter : Total words with lenght>5:- ",str2.length);
  
//question number 8
// let EvenToOdd = num.map((value)=>{
//     if(value%2===0){
//         return value+1;
//     }else{
//         return value;
//     }
// });
// console.log("Even TO Odd Number:-",EvenToOdd);

// //question no 9
// let OddToEven = num.map((value)=>{
//     if(value%2===1){
//         return value-1;
//     }else{
//         return value;
//     }
// });
// console.log("Odd To Even Number:-",OddToEven);

// //question number 10
// let evry = num.every((value)=>{
//     if(value%5===0){
// return value;
//     }
// });
// console.log(evry);
// //question number 11
// let som = num.some((value)=>{
//     if(value%5===0&& value<10){
//         return value;
//     }

// });
// console.log(som)