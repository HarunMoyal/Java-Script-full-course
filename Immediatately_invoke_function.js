/* kisi function ko banana aur turant call karna
ho toh usse Immediatatly invoke function kahte hai */
// isse ek prakar ka local function bhi bol 
//sakte hai jis se yeh program ki
//memory bhi kharab nhi karega
//yeh anonymous function bhi ho sakta hai aur
// declair function bhi ho sakta hai

(function(){
    document.write("Immediately invoke function");
    alert("invoke function")

})();
/*syntex of Immeditately invoke function
(function(){
    console.log("hello world");
})();*/