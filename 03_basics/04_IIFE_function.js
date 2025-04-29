// Immediately Invoked Function Expression (IIFE)
// normal function
function chai() {
    console.log("DB Connected");    
}
chai();

// IIFE function
(function chai(){
    console.log("DB Connected Two");    
})();

// IIFE arrow function
(() => {
    console.log("DB Connected Three");        
})();

// IIFE arrow function with name added
((name) => {
    console.log(`DB Connected Four ${name}`);        
})("Amanpreet")