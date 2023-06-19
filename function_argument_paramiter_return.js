//  num = prompt("entr number")
//  function MultiTable(num){
 
// for(i=1;i<=10;i++){
    
//     document.write(`${num} x  ${i}= ${num*i}`);
    //document.write(`<br>`)

// }
//  }

// MultiTable(num);
//var num = prompt("Enter a number");

// function multiTable(num) {
//   for (var i = 1; i <= 10; i++) {
//     var result = num * i;
//     console.log(`${num} x ${i} = ${result}`);
//   }
// }

// multiTable(20);

//===========================
//use for multipal table by prompt


// let num =0;
// function table(num){//num is paramiter
//     num = prompt("input");
//     document.write("table of ",num,
//     "=<br>");


// for(let i = 1; i <=10; i++){


//         document.write(` ${num} * ${i} = ${num*i}  `);
//          document.write('<br>');
//     }
// }
// for(let j =1;j<=3;j++){
    
// table(num);// jab function call krte hai tb value detehai toh 
//vah argument kaahlata hai
// document.write("<br>")
// }

// function add(){

//     if (arguments.length == 0){
//         document.write("No Argument Passed !");
    
//     } else{
//         let sum = 0;
//         for (let i = 0; i<arguments.length;i++){
//             sum = sum + arguments[i];
//         }
//         document.write(sum);

//     }

// }
// add(10,10,20,20);
//===================Return Function======

function add(a,b){
    //let d = [];
    
    {
        
        
      a = prompt("enter the value");
      b = prompt(" b value")
    }
     //let arr = d.split(",")
     document.write(`A value is = ${a} <br> and b value is = ${b}`)
     document.write("<br>")
     
      if(a<b){
        document.write("A is small");
     }else if(b<a){
    document.write("B is small");
     }else{
        document.write("equal");
        
     }
    
return a,b;
}

 let c = add();

document.write(c);//return  se hum kisi variable mai function ko declair kr sakte hai
//ek function mai ek return hi kaam krega
 // function mai arry bhi return kr sakte hai
//return nhi likhenge toh undefine return krega