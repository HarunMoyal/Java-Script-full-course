// DOM ek tarah ka html aur css ka api hai
// jo hame js se html aur css ka data manuplate
//kr sakte hai(add, remove and modify parts1)

// js sabhi html element ko object ke hisab se read krta hai
//aur her object ke pass ek property bhi hota hai aur
// ek method bhi hota hai
// document. object pure web page ko represent krta hai


// html code=


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <!--<script src = "nested_objects.js"></script> -->  
    
// </head>
// <body>
//     <ul>list1</ul>
//     <ul id="name"
//     >list2
// </ul>
//     <ul>
//         list3
//     </ul>
//     <script>
//         let ele = document.getElementById("name"); //element ko let varibal me store krne ke liye
    
//     console.log(ele.innerHTML);
//     ele.innerHTML = "<p>moyal</p>" //element ko modify krne ke liye
//     </script>
         

// </body>
// </html>

//================================



// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <!--<script src = "nested_objects.js"></script> -->

// </head>

// <body>       // hamne do class banai
//     <ul class="cl">list1

//     </ul>
//     <ul id="name">list2
//     </ul>
//     <ul class="cl">
//         list3
//     </ul>
//     <script>
//         let ele = document.getElementById("name");
//         ele.innerHtml = "<p> hello</p>";
//         console.log(ele);
//         let clas = document.getElementsByClassName("cl");//same naam ki class ko varible me store kiya
//         console.log(clas);<!-- this is a arry-->//yeh class hame arry me convert hogi
//         for(let i = 0;i<clas.length;i++ ){//arry ko print krne ke liye hame loop chalana hoga
//             clas[i].innerHTML="<p> hello</>"//ek sath dono class ko manuplat kr dega
//         }
//     </script>


// </body>

// </html>


//=============================
{/* <h2>heading1</h2>
    <div id="div1">// yeha humne div declair kiya
    <p>pargraph1</p>
    <h2>heading2</h2>
    <p>pargraph2</p>
    <h2>heading3</h2>
    <p>pargraph3</p>
    </div>

    <script>
        let div2 = document.getElementById("div1");//var div 2 mai div element declair kiya
        let elm = div2.getElementsByTagName("h2");// // elm varible mai div1 ke tag h2 ko select kiya
        for(let i = 0;i<elm.length;i++ ){
            elm[i].innerHTML="hello"// div1 mai h1 sabhi class ko change kiya
        }
    </script> */}
     