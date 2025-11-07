
const insertionSorting = (array) => {
    for (let i = 1; i < array.length; i++){
        let current = array[i]
        let j = i - 1;
        
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(insertionSorting([5,3,8,4,2]))