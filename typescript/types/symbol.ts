let symb1: symbol; // symb1: symbol явно
const symb2 = Symbol('animal'); // synb2: symbol неявно
const symb31 = Symbol.for('animal'); // synb2: symbol неявно

let symb3: symbol = Symbol.for('key');
let Symb4: Symbol = Symbol.for('key');

Symb4 = symb3; // Ok
symb3 = Symb4; // Error -> Type 'Symbol' is not assignable to type 'symbol'.


const symb5 = Symbol('42'); // const symb5: symbol