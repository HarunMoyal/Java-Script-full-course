//Broweser object model broweser ko represent krta hai
//aur iska ek object hai Window object jo broweser ke window 
//ko represent krta hai 
// jitna bhi global varible hai java script mai jaise var, and function
//woh automatik member hota hai window object ka
//globle varible are propertiesn of window object
//global function are method of window object
//all globle type is called window object agr globle
//object hai ho woh wondow object ka sab object bn jayega


// console.log(window.innerHeight);//apne window ki height and with batayega
// console.log(window.innerWidth);
// console.log(window.outerHeight);//pure window ki height bataye sabhi toolbaar ko jod ke

// console.log(window.outerWidth);
// let btn2 = document.getElementById("btn1");
// let url = "https://www.google.com";
// let featur = "height=500,width=500";

// btn2.addEventListener('click', function(){
   
//     window.open(url, 'Google', featur);
// }); //window.open(url, name, features);


// new window mai site open and close krne ka program
document.addEventListener('DOMContentLoaded', function() {//pprogram ko load krne ke liye event fun use kiya
    let click= document.getElementById("btn1");//html ke buttons ko var mai declair kiya
    let click1= document.getElementById("btn2");
    let click2= document.getElementById("btn3");
    let click3 = document.getElementById("btn4")
    let url = "https://www.google.com";//url ko var mai dec kiya
    //let url1 = "https://www.yahoo.com";
    let featur = "height=500,width=500";//pop up window ki size declair ki
    let close;//globle varible banaya
    let close1;
  
    click.addEventListener('click', function() {//click button mai addevent kiya
     close = window.open(url, 'google', featur);//window open ka event syntex : window.open(url,name,feature means size) 
    });
    click1.addEventListener('click', function() {
       close1 = window.open('http://www.yahoo.com', 'yahoo',featur);close1 mai window ko select kiya
      });
      click2.addEventListener('click',function(){
        
        close.close();//window close krne ka syntex
        
      });
      click3.addEventListener('click',function(){
        
        close1.close();
      });


  });
  
