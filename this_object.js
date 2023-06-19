let client = {
    FirstName: "Harun" ,
    LastName: "Moyal",
    City: "Merta City",

    //agr hum apne object ke ander hi object ki properties
    // ko use krte hai tb this keyword ka use krna chahiye
    //aur ek object mai function me dusre object ki value ko
    //call kr sakte hai jaise humne iss object mai kiya hai mai kiya hai
    Detail(){
        console.log("Hello i am  "+this.FirstName+" and i have a "+car.Brand+" car");
    }
};

let car = {
    Brand: "Honda",
    Model: "City",
    Date: "2016"
};
client.Detail();