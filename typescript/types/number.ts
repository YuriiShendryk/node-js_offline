let n1: number; // n1: number явно
let n2 = 5.6; // n2: number неявно

let binaryNumber: number = 0b101;
let octalNumber: number = 0o5;
let decimalNumber: number = 5;
let hexNumber: number = 0x5;


let n: number = 5;
let N: Number = new Number(5);

N = n; // Ok
n = N; // Error -> Type 'Number' is not assignable to type 'number'.



const number = Number(5); // const number: number
const numberInstance = new Number(5); // const numberInstance: Number

