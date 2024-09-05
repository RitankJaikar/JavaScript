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
let s2 = new String("String"); //type: object (Constructor Syntax)
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

// DATE in JS (date is object in JS )
// A Date object in JavaScript stores the number of milliseconds that have passed since January 1, 1970, at midnight UTC (called the epoch)
let myDate = new Date();    //Gives current UTC Data and time, can be adjusted to other time zone like IST
console.log(myDate);    //2024-09-04T11:54:53.790Z
console.log(myDate.toString()); //Wed Sep 04 2024 11:54:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());  //2024-09-04T11:54:53.790Z
console.log(myDate.toJSON());   //2024-09-04T11:54:53.790Z
console.log(myDate.toDateString()); //Wed Sep 04 2024
console.log(myDate.toTimeString()); //11:54:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());  //Wed, 04 Sep 2024 11:54:53 GMT
console.log(myDate.toLocaleString());   //9/4/2024, 11:54:53 AM
console.log(myDate.toLocaleDateString());   //9/4/2024
console.log(myDate.toLocaleTimeString());   //11:54:53 AM

let newDate2 = new Date(2023,0,1);  //month starts with 0
console.log(newDate2.toDateString());   //Sun Jan 01 2023
let newDate3 = new Date(2000, 11, 8, 19, 45);   //my birthday
console.log(newDate3.toLocaleString()); //12/8/2000, 7:45:00 PM
let newDate4 = new Date("2024-1-16");    //Here montth start with 1
console.log(newDate4.toUTCString());    //Thu, 18 Jan 2024 00:00:00 GMT
let newDate5 = new Date("01-16-2024");  //alt version, works
console.log(newDate5.toUTCString());    //Thu, 18 Jan 2024 00:00:00 GMT

let newDate = Date.now();
console.log(newDate);   //current date in ms-> 1725453695466
console.log(newDate5.getTime());  //date in ms-> 1705363200000
console.log(Math.floor(Date.now()/1000));   //in sec, can be used to compare date and times

console.log(myDate.toLocaleString("default", {
    // weekday: "short",
    timeZone: "IST"     //ctrl+space for suggestion
}));


//Arrays
let arr1 = [1,2,3];
let arr2 = new Array(1,2,3);    //Constructor Syntax: not prefered and both are same
let arr3 = new Array(3);    //Creates an empty array with 3 slots
// let arr4 = arr1.splice(0,2); //changes orig. array too
let init = 0;   //optional
let sum = arr1.reduce((acc, curr) => acc+curr, init);   //6
let num = arr1.find(item => item<2);    //1 (returns first matching value)
console.table([arr1,arr2, sum, num]);
// console.log([1] === [1]);   //false, compares the address

// .indexOf(1) , .includes(1)
// arr1.toString() , arr1.join() [both are same, but] , arr1.join("-") [can choose seprator in join]
// =>Change in orig. array:- .push(4) , .pop() , .unshift(0) [adds 0 to start, inc. TC] , .shift() [remove first ele]  , .reverse() , sort() , .splice(0,2) [returns the array as slice includes 2 also, but also cuts original array], .forEach() [if alter in ele]
// =>Change in or create copy array:- arr1.concat(arr2) , .slice(0,2) , .map() , .filter() , [...arr1] , .flat()
// .every() [Returns a boolean, true if all elements pass the test, false otherwise] , .some() [Returns a boolean, true if at least one element passes the test, false otherwise]
// arr1.reduce((acc, curr) => acc+curr, init); [sum of ele]  [init is optional, reduces array to single value, do not change orig.]
// forEach, map, filter, every, some, reduce, find are higner order functions (uses callbacks)
// Array.isArray(var) , Array.from(var) , Array.of(var1,var2,var3)

arr1.push(...arr2); //spread operator (creates copy)
console.log(arr1, Math.min(...arr1), Math.max(...arr1));

let arr4 = [1,2,[3,4,[5,6,[7,8]]]]; // too much depth
let arr5 = arr4.flat(Infinity); // can give number of depth of Infinity to spread all deapth
console.log(arr5);  // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(Array.isArray("Name")); //false
console.log(Array.from("MyName"));  //[ 'N', 'a', 'm', 'e' ]
console.log(Array.from(Number(123).toString())); //[ '1', '2', '3' ]
console.log(Array.from({name: "Name"}.name));  //['N','a','m','e']

let n1=n2=n3=10;
console.log(Array.of(n1,n2,n3));    //[ 10, 10, 10 ]

//Objects
//3 ways to create object
//Constructor: let obj = new Object()     //empty object
//Object.create(prototype, propertiesObject)    //both are singleton
    //Provides fine-grained control over the prototype and property descriptors. Useful for creating objects with a specific prototype or when you need to set up complex inheritance.
//Object Literals: let obj = {}     //most used and faster

//access obj keys- obj.key (shortcut) or obj["key"] (actual)
//delete key- delete obj.key (not much used and recomended)

//all ways to declare and access key
let dynamicKey = 'dynamic';
let mySym = Symbol("key1");
let obj = {
    a: 1,
    [dynamicKey]: 2,
    "anotherKey1": 3,
    ["anotherKey2"]: 4,
    3 : 5,
    "" : 6,
    [mySym]: 7
}
console.log(obj);
console.table([obj.a, obj[dynamicKey], obj["anotherKey1"], obj.anotherKey2, obj["3"], obj[""], obj[mySym]]);

Object.freeze(obj); //Freezes the object, can not change or add keys

// ? -> optional chaining operator: It allows you to access properties of an object safely, without throwing an error if the object or property is null or undefined. It's useful for preventing runtime errors when accessing nested properties in objects.
//e.g. obj?.name will:
//Return the value of obj.name if obj exists.
//Return undefined if obj is null or undefined, without throwing an error.

// merge objects, Object.assign({}, obj1, obj2, obj3);
// let obj3 = {...obj1, ...obj2, ...obj3}  (better and easy)

console.log(Object.keys(obj));  //returns all keys in an array
console.log(Object.values(obj));   //returns array of values
console.log(Object.entries(obj));  ///returns array of [key, value] pairs
console.log(obj.hasOwnProperty('dynamic')); //true/false

//Destructure Object
let {a: key , dynamic} = obj;
console.log(key, dynamic);

//Destructure Array
let arr6 = [1,2,3];
let [v1, , v3, v4, v5=10] = arr6;
console.log(v1,v3,v4,v5);   //1 3 undefined 10

//Function
function print() {
    console.log("print");
}
//print   //reference
print()   //execution, call

//parameters vs arguments
function add(a, b, c = 10) {  // a, b and c(with default) are parameters
    console.log(a);
    console.log(b);   //undefined if a or b is not passed as argument
    // return         //returns undefined
    //return a;       //returns undefined
    return a+b;       //returns NaN if a or b is not passed as argument
}
let result = add(1,2);   // 5 and 10 are arguments
console.log(result);


function calculateCartPrice(val1, val2, ...num) {   //this time its rest operator
    return num;
}
console.log(calculateCartPrice(10,20,30,40,50));   //[ 30, 40, 50 ]

//Scope
if(true) {
    let a2 = 1;
    const b2 = 2;
    var c2 = 3;    //Problematic (old, never recommended)
}
// console.log(a2 , b2);   //Out of scope (not defined, error)
console.log(c2)     //gives value but Problematic

//Closure (allow inner functions to access and remember variables from their outer functions, even after the outer function has executed)
function one() {
    let p = "p";
    function two() {
        let q = "q";
        console.log(p);
    }
    // console.log(q);  //error, out of scope
    two();  // Works fine, as 'two()' is called within 'one()'
}
one();
// Trying to call 'two()' outside 'one()' will result in an error:
//two(); // Error: two is not defined

let fun1 = function() { //variable as function, expression
    console.log("fun1");
}
//we can call normal function anywhere in the scope, but expression can be only called after declaring the variabe/variable as function/expression

console.log(this);  //{} -> global object, in browser its window object
let user = {
    name: "Ritank",
    message: function() {
        this.name = "Jaikar";   //changes the name
        console.log(this.name); //this refers to user object
    }
}
user.message();
function showThis() {
    console.log(this);  //represents the properties and methods available on the global object
}
// showThis();

let arowFun = () => {
    console.log("arrow function")
    console.log(this);  //{} -> refers global object
}
arowFun();
// let arowFun1 = (num1,num2) =>  num1+num2;    //return num1+num2
//or, better use second one, first may give problems
let arowFun2 = (num1,num2) =>  (num1+num2); //implicit return (other one is explicit return)

// IIFE- Immediately Invoked Function Expression (new for me)
(function iife1() {     //named IIFE
    console.log("Immediately invoke function1");
})();   //semi colon is importnt with IIFE
((fun) => {     //unnamed IIFE
    console.log(`Immediately invoke ${fun}`);
})("function2");
(function() {     //this syntax is also correct
    console.log("Immediately invoke function3");
})();
//Avoid polluting the global scope: It creates a private scope, preventing variables inside the IIFE from affecting the global environment. It can not be called globally. Its one time function.
//Execute code immediately: It runs the function as soon as it is defined, which is useful for initialization code.

// JS Execution Context
// - {} -> Global EC (this) or Globale Env., window in browser (always)
// - Function EC
// - Eval Exection Context

//Two JS ececution phase:-
// - Memory Creation Phase or Creation Phase ir Parsing Phase
    //creates space for for all variables with undefined, and for all function with their definition (cycle 1 complete)
// - Execution Phase
    //Does all the operations including calculations, assigining values to variables and for every function call it will New Variable Enviorment for Function EC with Execution Thread with again repeating cycle of Creation Phase and Execution Phase for this env. and after executing it gets deleted and returns to Global EC.

//Callstack- LIFO: Last In First Out (It a mechanism used by JavaScript to keep track of function calls and their execution contexts.)

//Things to remember- Execution Context, Global EC/Globale Env. (always), Function EC. Eval EC, 2 JS Exec. Phase, Cycle 1- Memory Creation Phase/Memory Phase/Creation Phase/Parsing Phase, Cycle 2- Execution Phase, New Variable Enviorment for Function EC. with Execution Thread, Callstack, LIFO

//Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Everything else is Truthy- surprise mf: "0", 'false', " ", [], {}, function(){} :these are Truthy

// Nullish Coalesscing Operator (??): null undefined
let val1;
val1 = 10 ?? 5;  //5
// val1 = null ?? 10;   //10
// val1 = undefined ?? 10;  //10
// val1 = null ?? 10 ?? 15; //10
// val1 = undefined ?? null;   //null
// val1 = null ?? undefined;   //undefined
console.log(val1);

//Map : the Map object is a collection of key-value pairs where both the keys and values can be of any type. Maintains the insertion order of key-value pairs.
//Key Flexibility: Unlike objects, Map keys are not limited to strings or symbols—they can be any data type.
let map = new Map();
// Keys of different types
map.set('a', 1);           // String key
map.set(1, 'one');          // Number key
map.set(true, 'yes');       // Boolean key
map.set({name: 'John'}, 25); // Object key  //can to be accessed directly
map.set(() => 'key', 'func'); // Function key //can to be accessed directly (first store key in variable then map.get(var))
// map.delete('key1');
// map.clear();
console.log(map.size, map.get(true), map.has('key1'));
// Using forEach
map.forEach((value, key) => {   //first value then key
    console.log(key, value);
});
// Using for...of
for(let [key, value] of map){
    console.log(key, value);
}

//Iterate object: for in loop
let obj2 = {
    key1: 1,
    key2: 2,
    key3: 3
};
for (const key in obj2) {
    console.log(key,":",obj2[key]);
}
//Iterate array: for in loop  (for of is better for array)
for (const key in arr1) {   //key is index of array here
    console.log(key, arr1[key]);
}
//map is not directly iterable, and for sure not with for in loop
//forEach
arr1.forEach((item, index, arr) => {    //arr -> full array
    console.log(item, index, arr);
});
//forEach does not return anything unlike map, filter, reduce, every & some