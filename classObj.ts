class Pizza{
    topping: string;
    size: number;

    constructor(topping: string, size: number) {
        this.topping = topping;
        this.size = size;
    }

    serve() {
        return `serve a ${this.size} inch ${this.topping} pizza.`
    }
}

const food = new Pizza('chesse', 10)

// console.log(food.serve())

class Car {
    brand: string;
    speed: number;
    
    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        return `${this.brand} & ${this.speed}`
    }
}

const tesla = new Car('Tesla', 250);
const toyota = new Car("Toyota", 100);

console.log(toyota.drive())
console.log(tesla.drive())