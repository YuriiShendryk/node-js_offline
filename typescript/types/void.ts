const func = (): void => {}
function action(): void { }

class VoidTypeSystem {
  static any: any = action(); // Ok
  static number: number = action(); // Error
  static string: string = action(); // Error
  static boolean: boolean = action(); // Error
  static null: null = action(); // Error
  static undefined: undefined = action(); // Error
  static void: void = action(); // Ok
}


VoidTypeSystem.void = VoidTypeSystem.any; // Ok
VoidTypeSystem.void = VoidTypeSystem.number; // Error
VoidTypeSystem.void = VoidTypeSystem.string; // Error
VoidTypeSystem.void = VoidTypeSystem.boolean; // Error
VoidTypeSystem.void = VoidTypeSystem.null; // Ok
VoidTypeSystem.void = VoidTypeSystem.undefined; // Ok
VoidTypeSystem.void = VoidTypeSystem.void; // Ok

function funcA(): void {
  const result: number = 5;
  return result;
}

function funcB(): void {
  const result: string = '5';
  return result; // Error
}

function funcC(): void {
  const result: any = 5;
  return result; // Ok
}


function voidFunc(): void {}
const identifier = voidFunc(); // identifier: void