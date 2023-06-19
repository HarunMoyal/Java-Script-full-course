//random number means automatic number genrate krna
// aur kya number aayega jb page reload hoga
// jaise ludo game mai number random genrate
//hote hai

let x = Math.random();//is function mai random number aayege lekin 
// number 0 - 1 tk hi aayege
document.write(x);
let y = (Math.random()*10);// iss se value 0 se 10 tk aayegi
document.write("<br>",y);

let z = Math.floor(Math.random()*10);// floor function
//  se value point mai nhi aayegi
document.write("<br>",z);

// agr hame sirf 20-30 tk ke hi number genrete krvana hai toh
let a = Math.floor(Math.random() * (31-20)+20);// maxi value ko ek km leta 
// hai iss liye 31 likha
document.write("<br>",a);