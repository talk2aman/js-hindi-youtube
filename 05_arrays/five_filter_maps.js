const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num)=> num > 5 )
console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 5
// } )
// console.log(newNums);

const books = [
	{title: 'Contact',		author: 'Carl Sagan',		genre: 'Science fiction novella' },
	{title: 'The Time Machine',	author: 'H.G. Wells',		genre: 'Science fiction novella' },
	{title: 'Brave New World',	author: 'Aldous Huxley',	genre: 'Dystopian fiction' },
	{title: 'The Illustrated Man',	author: 'Ray Bradbury',		genre: 'Short stories' },
	{title: 'Code Complete',	author: 'Steve McConnell',	genre: 'Computer Book' },
	{title: 'The City & the City',	author: 'China Miéville',	genre: 'Crime' }
];

const userbooks = books.filter( (bk) => bk.genre === "Computer Book" || bk.author === "H.G. Wells" || bk.title === "Contact")
// const userbooks = books.filter( (bk) => {return bk.genre === "Computer Book" || bk.author === "H.G. Wells" || bk.title === "Contact"} )
console.log(userbooks);


const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myNum = newNum.map( (num) => num * 10)
const myNum = newNum
				.map( (num) => num * 10 )
				.map( (num) => num + 1 )
				.filter( (num) => num >= 40 )
console.log(myNum);

