function myName(){
    console.log("A")
    console.log("m")
    console.log("a")
    console.log("n")    
}

//myName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)  
    // let result = number1 + number2  
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result is", result);

function loginUserMsg(username = "hitesh"){
    return `Hi ${username} you are logged in!`
}

// console.log(loginUserMsg());
console.log(loginUserMsg("Aman"));


// rest opreator(...)
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500));

function calculatePrice(...num2){
    return num2
}
console.log(calculatePrice(200, 300, 400, 500));


// object in function
const user = {
    username: "Aman",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

 handleObject(user)

 //direct object pass
 handleObject({
    username: "sam",
    price: 399
 })


 const newArry = [200, 300, 400, 500, 600]
 function returnValue(getArry){
    return getArry[3]
 }
//  console.log(returnValue(newArry));
console.log(returnValue([200, 300, 400, 500, 600]));


 