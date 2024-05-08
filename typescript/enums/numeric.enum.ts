enum AnimalEnum {
  Cat, // 0
  Dog, // 1
  Humster, // 2
}



enum Pets {
  Cat = 2, // 2
  Dog = 4, // 4
  Humster = 6, // 6
}

enum Fruits {
  Apple = 1,
  Orange, // 2
  WaterMelon,
  Banana, // 4
}


enum Keys {
  A = 10,
  B, // 11
  C = 10,
  D, // 11
}




const value: number = Fruits.Apple; // 1
const identificator: string = Fruits[value]; // Apple
const identificator2: string = Fruits[Fruits.Apple]; // Apple

console.log({value, identificator})