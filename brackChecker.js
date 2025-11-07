import Stack from '../Module 3/stack.js'

// const stack = new Stack()
// console.log(stack)

const bracketChecker = (str) => {
    const stack = new Stack();

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.isEmpty()|| stack.pop()!==bracketMap[char]) {
                return false;
            }
        }
        
    }
    return true;
};

console.log(bracketChecker(')([]{}'))
console.log(bracketChecker('()[]{}'))

