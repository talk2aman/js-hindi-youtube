// if/else statements are used to execute a block of code based on a condition.
// If the condition is true, the code inside the if block will be executed.
// If the condition is false, the code inside the else block will be executed.
// If there are multiple conditions, you can use else if to check for additional conditions.
// If none of the conditions are true, the code inside the else block will be executed
const pocketMoney = 1000;
if (pocketMoney > 1000) {
    console.log("You are rich");    
}
else if (pocketMoney > 500){
    console.log("You are middle class");
} else{
    
}


// switch statements are used to execute a block of code based on the value of a variable or expression.
// The switch statement evaluates the expression and compares it with each case.
// If a match is found, the code inside that case block will be executed.
// If no match is found, the code inside the default block will be executed.
const month = 3;
switch (month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    default:
        console.log("Invalid month")
        break;
}
 
const months = "jan";
switch (months){
    case "jan":
        console.log(1)
        break;
    case "feb":
        console.log(2)
        break; 
    case "mar":
        console.log(3)
        break;
    case "apr":
        console.log(4)
        break;
    default:
        console.log("Invalid month")
        break;
}

// &&, ||, ! are logical operators
const userLoggedIn = true
const debitcard = true
const loggedInwithGoogle = false
const loggedInwithFacebook = true

if(userLoggedIn && debitcard){
    console.log("user logged in & has debitcard");    
}
if(loggedInwithGoogle || loggedInwithFacebook){
    console.log("user logged in with facebook");    
}

// nullish coalescing operator (??) is used to check if a value is null or undefined.
// If the value is null or undefined, it will return the right side of the operator.
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = undefined ?? 10 ?? 20;
console.log(val1); 


// terniery operator is a shorthand way of writing an if-else statement.
// It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.
// The syntax is: condition ? valueIfTrue : valueIfFalse
const iceTea = 100;
iceTea <= 80 ? console.log("ice tea is cheap") : console.log("ice tea is expensive");
