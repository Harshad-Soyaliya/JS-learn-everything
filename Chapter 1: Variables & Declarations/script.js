//=================================================
//=================================================

// variables :

// var

var name = "harshad"; // old

var name = "hello"; // redeclare allowed and also value change allowed

// scope - function scope

// it means it respect only function , also it not respect to curry braces

console.log("global scope : ", name);

{
  var a = 5;
  console.log("block scope : ", a);
}

function hello() {
  var b = 5;
  console.log("function scope : ", b);
}

hello();

//-------------------------------------------

// let

let alet = 10;
// let alet = 5 ; // error not redeclar

alet = 21; // allowed for changing value (reassign)

// scope - blocks

// it means it respect curry braces.

let letblock = 40;

{
  let letblock = 50;
  console.log("inside block :", letblock);
}

console.log("outside block :", letblock);

// so it only access withing blocks , if in this block level not this variable so that time only it find outisde this block level and find this variable at global level

//-------------------------------------------

// const

const pi = 3.14; // use for constant and also not change value

// this both redeclare and reassign are not allowed
// const pi = 15;
// pi = 20 ;

// scope - blocks

// same as let

//=================================================
//=================================================

// Temporal dead zone

/*

it means :

---

console.log(a);




let a = 2;

---

here in line 88 i try to Access this a variale but this a i intialize in 93
so form 88 to 92 this all area/lines under TDZ so that why :
let , const -> show reference error . intialization
var -> undefined


*/

//=================================================
//=================================================

// hoisting -> it devides two part like ex :

/*

console.log(a);
var a = 10; -> so this line divided into two part

1) declar on top of the line
2) intialize

so it become like this :

---

var a = undefined;


console.log(a);
var a = 10;


so because of this things in js all variables access 
var -> print undefined
let , const -> Access variable(means it knows variable exist) , but it throw error whch is befor intialization not use or Aceess.

---

*/

// let

console.log(H); // here i try to direct Access
let H = 10; // than intialize the value

// so here i get error : intialize first than use , reference error
// must remember this erorr is for initalize not undefine or declrared errr (TDZ)

// var -> in this case not get error , it print undefined

console.log(Hvar);
var Hvar = 10;

// const same way let

// var -> above ex show

//=================================================
//=================================================

// Practice Zone

// 1. Declare your name and city using const , and your age using let .

const myname = "harshad";
const city = "rajkot";

let age = 21;

console.log(myname);
console.log(city);
console.log(age);

// -----

/*

2. Try this and observe the result:


let x = 5;
let x = 10;


ANS :  error -> because let not allowed to redeclare

*/

// -----

/*

3. Guess the output:

console.log(count);
var count = 42;


ANS : print undefined , reason : hoisting

*/

// -----

// 4. Create a const object and add a new key to it — does it work?

// -----

// 5. Try accessing a let variable before declaring it — what error do you see?

// ANS : error -> reference error , without initialization not Access or use , TDZ

// -----

// 6. Change a const array by pushing a value. Will it throw an error?
