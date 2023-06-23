 let user = {
    id : 101 ,
    email: "harunmoyal.hm@gmail.com",
    personalInfo : { // object ke ander object
        name : "harun moyal",
        Mobile: +919214321567,
        address: {
            street: "station road",
            city: "Merta City",
            countery: "INDIA"
        }
    
    }
 }
 console.log(user);
 console.log("----\n",user.personalInfo);//nested object ko lene ke liye syntex
 console.log("====\n",user.personalInfo.address);
 console.log("****\n",user.personalInfo.address.countery);//nested object ki properties ko call krne ke liye
