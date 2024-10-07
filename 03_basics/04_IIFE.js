// IIFE functions are the functions which executes suddenly after they are counter and we can pass the arguements in 
// that brackets itself.
//  IIFE functions are used to prevent the global scope pollution. as they are not required to
//  have names.

(()=>{
    console.log("Hello from IIFE");
})();

// Note that when defining the two iife functions then semicolon after the first one is necessary to prevent error.

((num1)=>{
    console.log(num1+1)
})(33);

// these functins can also be written as the regular functions
(function(num){
    console.log(num)
})(3)

