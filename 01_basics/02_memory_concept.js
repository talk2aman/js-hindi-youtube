// stack (primitive), heap (non-primitive)

//stack
let myYoutubeName = "amanpreet@google.com"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

//heap
let userOne = {
    email: "hello@gmail.com",
    upi: "123@byl"
}

let userTwo = userOne

userTwo.email = "newhello@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);

