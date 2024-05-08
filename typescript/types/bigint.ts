const bigInt: bigint = BigInt(Number.MAX_VALUE) + BigInt(Number.MAX_VALUE);

let bigint2: bigint = 10n;
let Bigint3: BigInt = BigInt(10);

Bigint3 = bigint2; // Ok
bigint2 = Bigint3; // Error => Type 'BigInt' is not assignable to type 'bigint'