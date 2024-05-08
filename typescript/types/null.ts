const nullIdentifier: null = null; // явно

class NullTypes {
  static any: any = null; // Ok
  static number: number = null; // Ok
  static string: string = null; // Ok
  static boolean: boolean = null; // Ok
  static null: null = null; // Ok
  static undefiled: null = undefined; // Ok
  static symbol: null = Symbol.for('key'); // Error
}

NullTypes.null = NullTypes.any;
NullTypes.null = NullTypes.number;
NullTypes.null = NullTypes.string;
NullTypes.null = NullTypes.boolean;
NullTypes.null = NullTypes.null;
NullTypes.null = NullTypes.undefiled;





let variable = null; // identifier: any  null with strictNullChecks:true

