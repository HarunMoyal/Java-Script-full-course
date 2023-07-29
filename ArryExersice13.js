// question number 3:-
// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//=================================

//question no. 4

let arr = [21,25,10,6,3,90,55,7];
let str =["aadil","aarif","sameer","haider"];
arr.forEach((arg) => {
  console.log(arg);
});
str.forEach((arg)=>{
    console.log(arg)
});


//question number 5
arr.push(7);
str.push("same");
console.log("after push arr:-",arr,"and str:-",str);
//question Number 6
arr.splice(1,1);

console.log("after second elemnt delete by Splice",arr);

//question no. 7

arr.pop();
//question number 8
console.log("Last elemnt delete by pop",arr);
let inc = arr.includes(3);
console.log(inc);
// this is also use another methode
let ind = arr.indexOf(5);//,agr elemnt array mai hoga toh uska index address batayega
console.log(ind);


////question number 9
arr.sort((a,b)=>a-b);
console.log("in asecending order",arr);
arr.sort((a,b)=>b-a);
//question number 10
console.log("descending order",arr);
//question number 11
console.log(arr.concat(str));
// concat also declair in var
let cont= str.concat(arr);
console.log("Concat ",cont);
//question number 12
let arr1 = [1,2,3];
console.log(typeof(arr1));//output :- object
let Tostr = arr1.join(",");
console.log(typeof(Tostr));//output:- string

// question number 13

let rev =arr1.reverse();
console.log(rev);

//question number 14
console.log(arr1.indexOf(1));

console.log("arr is",arr);
let slic = arr.slice(0,3);
//question number 15

console.log("new Slice Element is:=", slic);

//question number 16
let mapp = arr1.map((arg) =>{
    return arg*2});

    //its also use this pattern arr.map(arg=>arg*2);
console.log("Use of Map ",mapp);
//question number 17

let sum = 0;
let i =0;
while(i<arr1.length){
    sum = sum+arr1[i];
    i++;
}
console.log("Total Of all number:",sum);
//question number 18
let filtr = arr.filter(value=>{
    if(value%2===0){
       return value
    }
});

console.log("use filter for Even nmber is:-",filtr);
//question number 19
let sepret = arr.join("-");
console.log(sepret);
//question number 20
let conbin = arr.concat(arr1);
console.log("After Concat use function",conbin);
