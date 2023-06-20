// //(1)function for table


// let num =0;
// function table(){
    
//     let num1 =prompt("how much number table print");
//    for(let i = 0; i<num1;i++){
//       let num = prompt("Enter Number");
//     document.write("<br>table of ",num,"=<br>");

   
// for(let i = 1; i <=10; i++){


//         document.write(` ${num} * ${i} = ${num*i}  `);
//          document.write('<br>');
//     }
// }
// }


    
// table();

 

// (2) function for OddEven

// function OddEven(num){
//     num = prompt("Enter a Number");
//     if(num % 2 ==0){
//         document.write(`${num} number is Even`);
//     }else{
//         document.write(`${num} number is Odd`);
//     }
// }
//OddEven();


//(3)function for add numbers
// function add(){
//     let sum = 0;
    
    
//     let num1 =prompt("how much number add");
//     for(let i = 0; i<num1;i++){
//      let number = prompt("Enter Number");
     
//      document.write("<br>",number);
//      sum = sum+parseFloat(number);

     
     
//     }
//     document.write("<br>",sum);
//     alert(`total of numbers is ${sum}`);
    
// }

// add();


// (2) function for OddEven true false

function Odd_Even(){
    num = prompt("how much number you want odd even");
    let num2 = [];
    let num3 = [];
    for (let i = 0; i<num;i++){
        num1 = prompt("enter the number");
    
    if(num1 % 2 ==0){
        num2.push(num1);
        
        
    }else{
         num3.push(num1);
         
         

    }
    
} 
document.write(num3,"= is odd number<br>");
    document.write(num2,"= is even number");

}
Odd_Even();