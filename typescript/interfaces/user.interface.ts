interface Identifier {
  // тіло інтерфейса
}


enum UserRoleEnum { 
  GUEST = 'GUEST',
  ADMIN = 'ADMIN',
  USER = 'USER',
  COMPILANCE_MANAGER = 'COMPILANCE_MANAGER',
}

interface IUser { 
    name: string;
    age: number;
    password: string;
    role: UserRoleEnum;
}


const student: IUser = {
  name: 'Yurii', age: 31, password: 'bla-bla', role: UserRoleEnum['ADMIN'],
}


interface IAnimal {
  name?: string;
  run?: () => void;
}

class CAnimal { 
  name: string;
}


class Cat implements IAnimal {
  
  constructor() { 
    
  }
  run(): void {};
}







interface IPet {
  homeAddress: string
}

class Dog implements IAnimal, IPet {
  name: 'dog';
  homeAddress: string;
    run(): void {
        
    }
}

interface IWildCat {
  bark(): void;
}

class Lion extends Cat implements IWildCat {
  private _name: string;

  constructor(name: string)
  {
    super();
    this._name = name;
  }
  

  get name(): string { 
    return this._name;
  }
  bark(): void { }
 }



const lion = new Lion('LION');
lion.name



class Animal {
  private id: string;
  protected maxAge: number;
  public name: string;
}

// interface IAnimal extends Animal {}

class CatAnimal extends Animal implements IAnimal {
  // Ok
  // private id: string; // Error, private
  protected maxAge: number = 100; // Ok, protected
    public name = 'cat'; // Ok,  public
    run(): void {
    }
}

class DogAnimal implements IAnimal {
    // Error
  public name = 'dog';
}

const catAnimal: IAnimal = new CatAnimal(); // Ok
const dogAnimal: IAnimal = new DogAnimal(); // Error


interface IAnimal { 
    name?: string;
    age?: number;
    isPet?: boolean;
}


//так бачить компілятор
/**
interface IAnimal {
    name: string;
    age: number;
    isPet: boolean;
    run(): void;
}
*/





const homeCatAnimal: IAnimal = {};
homeCatAnimal.name = 'animal';
homeCatAnimal.age = 2;
homeCatAnimal.isPet = true;
