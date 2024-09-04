//"use strice"    //treates all JS code as newer version
//not important

// console.log("Hello World");

const id = 1234;
let userName = "ritank";
let accountState;  //undefined
var email = "ritank@gmail.com"; //outdated (never use)
                                //because of use in block scope 
                                //and functional scope

random = 999;   //new (without using keyword)
//its possible but not recommended
//it automatically becomes a global variable, can lead to conflicts with other variables and functions
//higher risk of accidentally overwriting existing variables
//throw error in Strict Mode

//; in JS is not necessary

console.table([id, userName, email, random, accountState]);   //new

//alert(1+2);     //throws error in node
//but will execute all code above, but not below
//as JS is interpreted language, runs code line by line

let a = null;
console.log(typeof(a));
// output: object -> JS LOL moment: due to a historical bug in the language, typeof null returns "object" instead of "null".  This is a known quirk of JavaScript that dates back to its early implementation.

// convert to number-> Number(value)
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1, false => 0

//conversion-> Number(value), String(value), Boolean(value), Object(value), Array.from(value), new Date(value) (If called without new, it returns the current date and time as a string.)

console.log(typeof("1"+2)); //"12" (all string)
console.log(typeof(2+2+"1")); //"41"
console.log(typeof("1"+2+2)); //"122"
//Executes from left to right

console.log(typeof(+true)); //1 (converts to number)
console.log(+"3");  //converts to number or NaN

// typeof function is function (also called object function)

let num1, num2, num3;
num1 = num2 = num3 = 2+4;

const id1 = Symbol('123');
const id2 = Symbol('123');
console.table([id1, id2, id1 === id2]); //false

const bigInt = 1232412n;
// n suffix is required to indicate that this is a BigInt and not a regular number


let s1 = "String"; // type: string
let s2 = new String("String"); //type: object
//String objects are objects, and they behave differently from primitive strings.
//Name with Number object

let name = "Ri-ta-nk";
// .__proto__  -> all methods of Strings
// name[2], .trim() , .replace("Ri", "Ja"), .includes("Ri") , .substring(0,4), .slice(-4, 4), .replace("Ri"), .split("-", 2)) [2 is limit here] , .repeat(2) , .toUpper() , .toLower() , indexOf("t")

//Count digits of a number
let num4 = 999999;
console.log(num4.toString().length);

//Summ of all digits
let num4Array = Array.from(num4.toString(), (num) => Number(num));
console.log(num4Array);
console.log(num4Array.reduce((acc,curr)=> acc+curr,0));

let num5 = 400;
console.log(num5.toFixed(4), num5);   //add 3 decimal -> 400.000 (string)
let num6 = 121.456;
console.log(num6.toPrecision(4), num6);   // Precision upto given digits -> 121.5 (string)

const hundreds = 100000000;
console.log(hundreds.toLocaleString()); //adds , -> us std
console.log(hundreds.toLocaleString("en-IN"));  //ind std

console.log(Number.MAX_VALUE, "  ", Number.MIN_VALUE, "  ", Number.MAX_SAFE_INTEGER);

console.log(Math, Math.PI, Math.abs(-10), Math.round(4.6), Math.ceil(4.2), Math.floor(4.9), Math.min(1,2,3,4), Math.max(1,2,3,4), Math.random());

let max = 20;   let min = 10;   //range -> both inclusive
console.log(Math.floor(Math.random()*(max-min+1) + min));   //formula random number in a range