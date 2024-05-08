import { Cl1 } from "./intersection";

type T0 = string | number; // union type


let page: T0 | Cl1 = 'asdsadad';
page = 1;


const func = <Type>(page: Type): Type => { 
return page    
}



interface IUser<T> {
    age: T
 }


page = true;



