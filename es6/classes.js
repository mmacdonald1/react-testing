class Animal {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  speak(){
    // console.log("Hi I'm "+ this.name)
    console.log(`Hi I'm ${this.name}`)
  }
}

let lion = new Animal("Mufasa", "golden");
lion.speak();

console.log(lion);

class Lion extends Animal {
  constructor(name,color){
    super(name, color);
  }
}

let lion = new Lion("Mufasa", "golden");
lion.speak();

console.log(lion);
