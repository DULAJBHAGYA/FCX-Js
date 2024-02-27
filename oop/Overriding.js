class Animal{
    shout(){
        console.log("shouting");
    }
}

class Dog extends Animal{
    shout(){
        console.log("barking")
    }
}

class Lion extends Animal{
    shout(){
        console.log("roaring")
    }
}

animal = new Animal();
animal.shout();

dog = new Dog();
dog.shout();

lion = new Lion();
lion.shout();