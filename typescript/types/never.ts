function errorThrowing(message: string): never {
  throw new Error(message);
}




class NeverTypeSystem {
  static any: any = errorThrowing(''); // Ok
  static number: number = errorThrowing(''); // Ok
  static string: string = errorThrowing(''); // Ok
  static boolean: boolean = errorThrowing(''); // Ok
  static null: null = errorThrowing(''); // Ok
  static undefined: undefined = errorThrowing(''); // Ok
  static void: void = errorThrowing(''); // Ok
  static never: never = errorThrowing(''); // Ok
}


NeverTypeSystem.never = NeverTypeSystem.any; // Error
NeverTypeSystem.never = NeverTypeSystem.number; // Error
NeverTypeSystem.never = NeverTypeSystem.string; // Error
NeverTypeSystem.never = NeverTypeSystem.boolean; // Error
NeverTypeSystem.never = NeverTypeSystem.null; // Error
NeverTypeSystem.never = NeverTypeSystem.undefined; // Error
NeverTypeSystem.never = NeverTypeSystem.void; // Error
NeverTypeSystem.never = NeverTypeSystem.never; // Ok


function action() {
  // function action(): never
  return errorThrowing('All very, very bad.');
}

const errorResult = errorThrowing('hello'); // const errorResult: never
const actionResult = action(); // const actionResult: never


const error = (message: string) => {
  // const error: (message: string) => never
  throw new Error(message);
}

const loop = ()  => {
  // const loop: () => never
  while (true) {}
}