// some

const arr = [1, 2, 3, 4, 5]

const arr1 = arr.some(item => item % 2 === 0)
// console.log(arr1)

const targetRole = ['admin', 'manager']
const role = ['executive', 'engineer','admin', 'utility', 'management']

// console.log(role.some((rl) => targetRole.includes(rl)))

// const newArray = Array.from({length : 5}).fill('hoga mara')
const newArray = Array.from([1,2,3],(value,i)=>value*value)
// console.log(newArray)

const range = (start, stop, step) => Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step)

console.log(range(1,15,3))