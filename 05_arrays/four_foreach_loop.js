const coding = ["javascript", "html", "java", "python", "ruby"]
coding.forEach( (items)=> {
    console.log(items);
} )

// function printMe(items){
//     console.log(items);    
// }
// coding.forEach(printMe)

coding.forEach( (items, index, arr)=> {
    console.log(items, index, arr);
} )


const myCoding = [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "js"
    },
    {
        language: "python",
        languageFile: "py"
    }
]

myCoding.forEach( (val)=> {
    console.log(val.language);
} )