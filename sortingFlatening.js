//Sort

const number = [40, 100, 20, 5, 4, 10, 1]
const fruits = ['banana', 'apple', 'cherry', 'dates']

const sortNumbers = number.sort((a,b)=>a-b)

// console.log(sortNumbers)

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flaten = tagsFromPosts.flat()
console.log(flaten)

const filterTags = new Set(flaten)
console.log(filterTags)