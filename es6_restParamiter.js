function sum(...args){// iss ka matlab hum kitne bhi argument pass kr sakte hai yeh rest paramiter kahlata hai
    let result=0;
    for(let i=0;i<args.length;i++){
        result+= args[i];
    }
    console.log(result);
}
sum(1.2,3,45,2);