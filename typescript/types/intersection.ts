export class AnimalLegs {
  count?: number;
}

class AnimalName {
  name: string;
}

let animalName: AnimalLegs & AnimalName = {
  count: 3,
  name: 'asdsads'
}


