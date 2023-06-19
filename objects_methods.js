let student ={
    FirstName: "Harun",
    LastName: "Moyal",
    // object ke ander function declair kr sakte hai aur baahar bhi function ko 
    // declair kr sakte hai
    // object ke ander method declair krne ka syntex
    class : function (){
        console.log("hello world !")
     },
     // is tarike se bhi function declair kr 
     //sakte hai
     class2 (){
        console.log("Method declair");
     }
}; 
student.age = 30;

// object ke bahar object mai method declair krne
// ka method
student.learn = function(){
    console.log("learn javascript");
}

student.class();
student.learn();
student.class2();