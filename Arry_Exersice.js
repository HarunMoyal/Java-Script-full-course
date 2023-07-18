
let arr = [2, 25, 658, 586, 542,101, 100, 202, 10];
let sum=0;
let sumOdd=0;
let sumEven=0;
let maxnum = arr[0];
let minnum = arr[0];
let lastnum = 0;
let upto_100=0;
let upto_50=0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even number is",arr[i]);
   
    sumEven+= arr[i];
  }
if(arr[i]>maxnum){
    maxnum=arr[i];
}
if(arr[i]<minnum){
    minnum=arr[i]
}
  sum+=arr[i];
  if(i>0){
    lastnum=arr[i];
  }
  if(arr[i]>100){
    upto_100++;
  }
  if(arr[i]>50){
    upto_50++;
  }
}
for(i=0;i<arr.length;i++){
    if(arr[i]%2===1){
    console.log(` Odd Number is ${arr[i]}`);
    sumOdd+=arr[i];
}
}


console.log("First Number of Array is:",arr[0]);
console.log("Last Number of Array is:",lastnum);
console.log("Sum of All Number:",sum);
console.log("Sum of Odd Number:",sumOdd);
console.log("Sum of all Even Number:",sumEven);
console.log("Maximum Number in Array is:",maxnum);
console.log("Minimum Number in Array is:",minnum);
console.log("Total Number of up to 100 is:",upto_100);
console.log("Total Number of up to 50:",upto_50);