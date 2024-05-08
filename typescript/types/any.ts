let animal: any = 'cat';
animal = 2;
animal = true;
animal = [1, true, 'dog'];


let user = JSON.parse('{"name": "Yurii"}');
let userName = user.name // Ok
let userAge = user.age // Ok

var cat; // cat: any
let dog; // dog: any


class Pet {
  name; // name: any
}

function weight(fruit) {
  // fruit: any
}


const add = (a, b) => a + b; //const add: (a: any, b: any) => any


