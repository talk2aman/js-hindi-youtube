const arr = [1, 2, 3, 4, 5];
for (const items of arr) {
    // console.log(items);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`hi frnds ${greet}`);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

// console.log(map);

// for (const countries of map) {
//     console.log(countries);
// }

for (const [key, value] of map) {
    console.log(key, `:-`, value);
}
