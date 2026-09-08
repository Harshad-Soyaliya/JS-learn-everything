/*

DATA TYPES :

1) Primitive types – stored directly.
2) Reference types – stored as references.

*/

// 1) Primitive

// sari easi value jinko copy krneke baad tumnhe ek real copy mill jaaye

/*

let a = 50;
let b = a;

so here : b = 50 , if in b i change : + 50 = b :- 100 , but in a = 50 


*/

let name = "harshad"; // string
let age = 21; // number
let male = true; // Boolean
let x; // undefined
let y = null; // null

/*

null :- it means humne jaan boojh kr koi value nahi di
undefined :- it means humne ek variable banaya aur usey value nahi di to jo value by default milli wo hai undefined.

symbol :- unique immutable value
:- future mein hum koi libraries use karege ab is case mein un library me kai baar kuchh field hoti hair , and than same time hume bhi kuch same field banani hai to galti se dono filed same hoke overlap na hojaye isliye symbol ka use hota hai jinse orignal field me kuch change or overwrite na ho

*/

// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol("id");
const sym3 = Symbol("id");

console.log(typeof sym1); // Output: "symbol"

// Every single Symbol is completely unique
console.log(sym2 === sym3); // Output: false

let obj = {
  uid: 1,
  name: "harshad",
  age: 21,
  email: "hello@gmail.com",
};

let u1 = Symbol("uid");
obj[u1] = "01";

let bignumber = 123456789012345678901234567890n; // Bigint , at the end : n

//----------

// 2) Reference or nonPrimitive data types

// inko copy krne pr real copy nahi but apko reference milega parent ka

/*

let a = [1 , 2 , 3];
let b = a;

so here , b = [1 , 2 , 3]; if in b i can change like : b.pop so :- b = [1 , 2], so also this change affect or show in a , a = [1 , 2]

*/

// arrays []
// objects {}
// functions ()

//============================================

// Daynamic typing :

/*

in js not follow stastic typic it follow daynamic typing it means we can change type of data

like ex :


*/

let Dtyping = 5;
Dtyping = "hello";
Dtyping = true;
Dtyping = [1, 2, 3];

// here above example this variable Dtyping : we can add any data types

//============================================

// type of quirks :

// it means something bugs in js that type of things like :

/*
typeof(null) // -> object
typeof(NaN) // -> number , (Nan means a not a number)
Nan === Nan ; // -> false

.1 + .4 // -> 0.5
.1 + .2 // -> 0.3000000000000000000004
[] + [] // -> ''

 */

//============================================

// type coercion :

/*

here automaticly change types like ex :

let a = "5" + 5;  -> 55
let a = "5" - 5;  -> 0

here in first example we show concatatination , 5 int convert into string ,
and in second example we add - so that time only one option there which is arithmatic subtraction so string convert int


 */

//============================================
/* 

// Truthy vs falsy values

falsy = 0 , false , "" , null , undefined , NaN , document.all
truthy = rest all 

*/
