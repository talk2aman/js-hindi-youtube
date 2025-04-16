//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "rambo", "kane", "spiderman"]

//console.log(myArr[2])

const newArr = new Array(1, 2, 3, 4)

//array methods
myArr.push(6)
//console.log(myArr);

myArr.push(7)
//console.log(myArr);

myArr.pop()
//console.log(myArr);

myArr.unshift(20)
//console.log(myArr);

myArr.shift()
//console.log(myArr);

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//const mixed_heros = marvel_heros.push(dc_heros)
//const mixed_heros = marvel_heros.concat(dc_heros)
const mixed_heros = [...marvel_heros, ...dc_heros]
console.log(mixed_heros);
console.log(mixed_heros[3]);

const another_arry = [1, 2, 3, [4, 5, 6], [1, 2, 3, [4, 5, 6]]]
const real_arry = another_arry.flat(Infinity)
console.log(real_arry);

console.log(Array.isArray("hello"))
console.log(Array.from("hello"))
console.log(Array.from({name: "aman"}))         //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
