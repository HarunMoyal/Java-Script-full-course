//objects mai do chize honi chahiye
//1. properties:- name, colour, brand, model
//2. action(function);-eat, run, talk, drive,park
 let student ={
    FirstName: "Harun",
    LastName: "Moyal"
}; 
console.log(student.FirstName);
console.log(student); //console me pura object batayega
console.log(student["FirstName"]);

student.FirstName = "Aarif";//modify object syntex
console.log(student.FirstName);
student.age = 30;//add new properties syntex
console.log(student);

//delete student.age;//kisi bhi propertie ko delete krne ke liye 

console.log("city" in student);// in operator true aur false value batayega

// for in loop sare objests ke saare properties ko acces kr sakte hai 
for (let  key in student){
    console.log(key);
}

//objects ki value ko jaanane ke liye
for (let  key in student){
    console.log(key  ,student[key]);//issme varible ko array mai declair krenge
    
}
 