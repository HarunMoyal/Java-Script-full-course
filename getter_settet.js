//kisi object ke kisi function mai data ko 
// change ya manuplate krke call krna getter kahlata hai aur yeh
//   yeh declair properties ki tarah hoga person .getname

var person ={
    name: "harun",
    lastname: " MOYAL",
    // get a(){// a is function name
        // return this.name.toUpperCase();
    
    set setname(c){//setter kisi bhi object ko input mai hi data ko manuplate kr sakta hai
        this.name = c.toUpperCase();
      //  this.lastname = c.toLowerCase();
        
    }

}; 
person.setname = "aarif";
console.log(person.name);//isse function ki tarah declair krne ki zarurat nhi hai
