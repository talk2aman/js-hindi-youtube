// truthy values
// "0", "false", " ", [], {},function(){}

// flasy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN


// how to check if array is empty
const arr = []
if(arr.length === 0){
    console.log("Array is empty")
}

// how to check if object is empty
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("object is empty")
}