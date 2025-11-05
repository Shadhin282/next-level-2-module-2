
// // stateless..............
// const counter = (amount) => {
//     let counter = 0;
//     counter = counter + amount;
//     return counter;
// }

// console.log(counter(3));
// console.log(counter(2))

//stateful......

const counter = {
    count: 0,
    add(amount) {
        this.count = this.count + amount;
    },
    print() {
        console.log(this.count);
    }
};

counter.add(2);
counter.add(3);
counter.add(5)
counter.print()