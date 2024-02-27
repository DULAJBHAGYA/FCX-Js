class Person { 
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
        console.log(`I am ${this.age} years old.`)
    }
}

class Student extends Person {
    constructor(name,age) {
        super(name,age);
    }
}

let student1 = new Student('Dulaj',23);
student1.greet();