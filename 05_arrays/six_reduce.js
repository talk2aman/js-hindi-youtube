const myNums = [1, 2, 3]
// const totalNum = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
const totalNum = myNums.reduce( (acc, currval) => acc + currval, 0 )
console.log(totalNum);


const shoppingCart = [
    {
        courseName: "js course",
        price: 2000
    },
    {
        courseName: "html course",
        price: 3000
    },
    {
        courseName: "react course",
        price: 4000
    },
]

const totalAmt = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(totalAmt);

https://www.youtube.com/watch?v=sscX432bMZo

