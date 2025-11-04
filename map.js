// const obj = { "true": 'hello' };
// // console.log(typeof obj.true)
// // console.log(obj)

// const course1 = { name: "programming Hero" };
// const course2 = { name: "Next level web development" }


// obj.nextLevel = { courseId: "level2" };
// obj[true] = { courseId: 'level1' }
// obj[course1] = { courseId: 'leve2'}
// // console.log(obj)

// const map = new Map();

// map.set(1, 'programming hero')
// map.set(true, 'next level ')
// map.set(course1, course2)
// console.log(map.size)
// console.log(map.has(true))
// map.forEach((value, key) => console.log("key ", key, "Value ", value))
// map.forEach((value, key) => console.log(key))
// map.forEach((value, key) => (key.name = 'shohoz sorol simple' + key.name))
// console.log(map)

//todo console.log([...map.keys()])

const course = [['course1', 'level1'],
    ['course2', 'level2']]

const map = new Map(course)
    
console.log(map)