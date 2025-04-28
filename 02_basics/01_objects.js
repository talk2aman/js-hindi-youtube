//const tinderUser = new Object

const tinderUser = {}

tinderUser.email = "abc@gmail.com"
tinderUser.isLoggedIn = true
tinderUser.id = "123abc"

console.log(tinderUser);


const regularUser = {
    email: "hello@hotmail.com",
    fullName: {
        userName: {
            firstName: "hitesh",
            lastName: "singh"
        }
    }
}
console.log(regularUser.fullName.userName.lastName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object destructure
const course = {
    courseName: "js in hindi",
    courseFee: "999",
    courseTutor: "hitesh"
}

const {courseTutor} = course
console.log(courseTutor);

const {courseTutor: tutor} = course
console.log(tutor);




