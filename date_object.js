let a = new Date();
console.log(a);// yeh functin hemare system ki date display kr dega
//output:- Tue Jun 20 2023 02:15:56 GMT+0530 (India Standard Time)


console.log(a.getTime());// sirf mili second me date and time batayega

console.log(a.getMonth());
console.log(a.getDay());//day number batayega arrey ki trh 0 se start hoga

a.setDate(a.getDate() + 50);// hame 50 din baad ki date batayega
console.log(a)