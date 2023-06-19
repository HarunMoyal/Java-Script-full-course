function add(){
if(arguments.length == 0){
    document.write("no arghument")
}else{
    sum = 0;    
    for(let i =0; i<arguments.length;i++){
        sum = sum+arguments[i];
    }
    document.write("Sum Is",sum);
}
 
}
add(100,200,300,35,52,5,65);

//document.write(<br></br>)
function less(){
    if(arguments.length == 0){
        document.write("no arghument")
    }else{
        minus = 0;    
        for(let i =0; i<arguments.length;i++){
            minus = minus-arguments[i];
        }
        document.write("less is",minus);
    }
    
}
less(4,1,2);