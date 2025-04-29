// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        // console.log("element found"); 
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value is ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + `*` + j + ` = ` + i * j);
        
    }
    
}


// while loop
let index = 0
while(index <= 10){
    console.log(`index is ${index}`);
    index = index + 2
}

let myArr = ["flash", "batman", "superman", "wonderwoman"]
let arr = 0
while(arr < myArr.length ){
    console.log(`value of my array is ${myArr[arr]}`);
    arr = arr + 1
}


// do while loop
let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);
