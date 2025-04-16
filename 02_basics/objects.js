//singleton
//object.create

//object literals
const mySym = Symbol("key1")

const JSuser = {
    name: "amanpreet",
    age: 42,
    [mySym]: "key1",
    location: "new delhi",
    email: "aman@google.com",
    isLoggedIn: false,
}

JSuser.email = "aman@microsoft.com"
console.log(JSuser.email)

console.log(JSuser)

JSuser.greeting = function(){
    console.log("hello users")
}

JSuser.greetings = function(){
    console.log(`hello users my name is ${this.name}`)
}

console.log(JSuser.greeting())
console.log(JSuser.greetings())