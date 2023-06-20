 // kisi object mai property same ho aur value alag 
 // ho toh object const. use hota hai

 function Student(first,last,age,cls){// is objest const. fun mai sequance by peramiter set honge
    this.firstName = first;//aur iss trah se object ki property ko declair krenge
    this.LastName = last;
    this.age = age;
    this.class = cls;
    this.sex = "M";//pre define property set kr sakte hai
   this.name = function(){//aur function bhi set kr sakte hai
        return this.firstName+" "+this.LastName;

    }
 }
 Student.prototype.city = "jaipur";//constructor function ke bahar declair krne ke liye

 let student1 = new Student("harun","moyal,",18,12);


 console.log(student1);

 //== prototype voh concept hai jis se hum method aur property ko const. obj ke bahar add kr sakte hai
  