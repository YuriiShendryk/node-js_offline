class UnknownTypeSystem {
  static unknown: unknown;

  static any: any = UnknownTypeSystem.unknown; // Ok
  static number: number = UnknownTypeSystem.unknown; // Error
  static string: string = UnknownTypeSystem.unknown; // Error
  static boolean: boolean = UnknownTypeSystem.unknown; // Error
  static null: null = UnknownTypeSystem.unknown; // Error
  static undefined: undefined = UnknownTypeSystem.unknown; // Error
  static void: void = UnknownTypeSystem.unknown; // Error
  static never: never = UnknownTypeSystem.unknown; // Error
}

UnknownTypeSystem.unknown = UnknownTypeSystem.any; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.number; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.string; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.boolean; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.null; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.undefined; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.void; // Ok
UnknownTypeSystem.unknown = UnknownTypeSystem.unknown; // Ok

// Operations

let admin: any;
admin.name = 'Admin'; // Ok
admin.age = 23; // Ok
admin(); // Ok

let admin2: unknown = admin; // Ok
admin2.name = "Admin2"; // Error
admin2.age = 30; // Error
admin2(); // Error

let unknwn: unknown = 5;

let v1 = 5 === unknwn; // Ok
let v2 = 5 !== unknwn; // Ok
let v3 = 5 > unknwn; // Error
let v4 = 5 < unknwn; // Error
let v5 = 5 >= unknwn; // Error
let v6 = 5 <= unknwn; // Error
let v7 = 5 - unknwn; // Error
let v8 = 5 * unknwn; // Error
let v9 = 5 / unknwn; // Error
let v10 = ++unknwn; // Error
let v11 = --unknwn; // Error
let v12 = unknwn++; // Error
let v13 = unknwn--; // Error

let v14 = 5 && unknwn; // Ok, let v14: unknown
let v15 = 5 || unknwn; // Ok, let v15: number
let v16 = unknwn || 5; // Ok, let v16: unknown
let v17 = !unknwn; // Ok, let v17: boolean



const func0 = (): unknown => {
  return; // Ok
}

const func1 = (): number => {
  return; // Error
}

const variabe = func0(); // Ok, const variabe: unknown