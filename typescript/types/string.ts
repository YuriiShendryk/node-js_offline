let s1: string; // s1: string явно
const s2 = 'Cat'; // s2: string неявно
const s3: string = 'Dog'; // s3: string явно
const s4: string = `Pets: ${s2}, ${s3}.`; // s4: string явно



let s: string = ''; // string
let S: String = new String(''); // String

S = s; // Ok
s = S; // Error -> Type 'String' is not assignable to type 'string'.


let s5 = String(''); // let s5: string
let s6 = new String(''); // let s6: String

