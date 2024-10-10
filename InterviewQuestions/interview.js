//Q1. Loop an array though its own property.
//Counter question: u mean to loop array to its original properties, and exclude the prototypal properties if any?
Array.prototype.ritank = "ritank";
let arr = [5,6,7,8];
for (const ele of arr) {
    console.log(ele);
}   //5 6 7 8
for (const key in arr) {
    //console.log(arr[key]);  //5 6 7 8 ritank
    if(arr.hasOwnProperty(key)){    // hasOwnProperty: useful with objects
        console.log(arr[key]);  //5 6 7 8
    }
}

console.log("----------------------------");

//Q2. Custom forEach
//Sol1- create a function
function myForEach(arr, callback) {
    if(!Array.isArray(arr)){
        console.log("Not Array");
        return;
    }
    else if(typeof callback !== "function") {
        console.log("Please pass valid function");
        return;
    }
    for(let i=0; i<arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const arr2 = [3, 4 , 5, 6];
myForEach(arr2, (ele, i, arr) => {
    console.log(i, " ", ele);
});
//Sol2: create new prototype for array, better
Array.prototype.myForEach = function(callback) {
    if(typeof callback !== "function") {
        console.log("Please pass valid function");
        return;
    }
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}
arr2.myForEach((ele, i) => {
    console.log(i, " ", ele);
});
//Sol4: just lil adv (might be lil overkill)
Array.prototype.myForEach2 = function(callback, thisContext) {
    if(typeof callback !== "function") {
        throw "Please pass valid function";
    }
    for (let index = 0; index < this.length; index++) {
        if(this.hasOwnProperty(index)) {
            callback.call(thisContext, this[index], index, this);
        }
    }
}
arr2.myForEach2((ele, i) => {
    console.log(i, " ", ele);
}, this);

console.log("----------------------------");

// console.log(100.toString()); //err
// . -> decimal places or . -> accessing property/method in Object
console.log((10).toString()); //"10"
console.log(10..toString());  //"10"

console.mytable = (vars) => {
    Object.entries(vars).forEach(([key, value]) => {
        console.log(key, " -> ", value);
    })
}

function fun1() {
    var2 = 2;
    return var1 = 1;   //adds to global variable after fun1() is called
}
console.log(fun1()); // 1
console.mytable({var1, var2}); //only after fun1() is called, otherwise var1, var2 are undefined
//Bad practice

console.log( 108 == ['108'] );     //true

const obj = {};
if(obj && obj.data && obj.data.person) console.log(obj.data.person);
//better (optional chaining)
console.log(obj?.data?.person); //undefined

console.log([1,10,3,20].sort());    //[1, 10, 20, 3]
// The default behavior of the .sort() method in JavaScript is to sort elements as strings. This means it will compare their string representations instead of their numeric values.
console.log([1,3,4,5,10,3,20].sort((a,b)=> a-b));   //JS uses TimeSort (hybrid sorting algorithm derived from merge sort and insertion sort)

//Flatten array
let arr3 = [1,2,[3,4,[5,6,[7,8]]]];
console.log(arr3.flat(Infinity));
//Infinity is global property is a numeric value representing infinity

//Boxing Process- When you try to access a property or method on a primitive value, JavaScript automatically converts that primitive into an object (this process is known as boxing) so that you can work with it as an object.

//swap in js, a=10, b=5
//1. temp = a , a = b, b = temp
//2. a=a+b , b=a-b , a=a-b
//3. a=a^b , b=a^b , a=a^b
//4. [a,b] = [b,a]

const num1 = 8_00_00_000;   //it works
console.log(num1);      //80000000

const name = "name";
age = 23;   //undeclared variable, adds to window scope as property
console.log(delete name);   //false
console.log(age)    //23
console.log(delete age) //true
// console.log(age) //error its deleted

//in JavaScript, the division operator (/) does not perform integer division like it does in some other languages (e.g., Python or C++), it actually results in a floating-point number. So need to use Math.floor() for positive number and Math.ceil() in negative number to get same results.