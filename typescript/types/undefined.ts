const undefIdentifier: undefined = undefined;


class UndefinedTypes {
  static any: any = undefined; // Ok
  static number: number = undefined; // Ok
  static string: string = undefined; // Ok
  static boolean: boolean = undefined; // Ok
  static null: null = undefined; // Ok
  static undefined: undefined = undefined; // Ok
}

UndefinedTypes.undefined = UndefinedTypes.any; // Ok
UndefinedTypes.undefined = UndefinedTypes.number; // Error
UndefinedTypes.undefined = UndefinedTypes.string; // Error
UndefinedTypes.undefined = UndefinedTypes.boolean; // Error
UndefinedTypes.undefined = UndefinedTypes.null; // Ok
UndefinedTypes.undefined = UndefinedTypes.undefined; // Ok


const undefinedVar = undefined; // with --strictNullChecks:true identifier: undefined