let isB1: boolean; // явно
const isB2 = false; // неявно

let b: boolean = true;
let B: Boolean = new Boolean(true);

B = b; // Ok
b = B; // Error -> Type 'Boolean' is not assignable to type 'boolean'.

let b3 = Boolean(''); // let v0: boolean
let B3 = new Boolean(''); // let v1: Boolean