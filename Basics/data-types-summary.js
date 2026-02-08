// Primitive

// 7 types: String,Number,null,Boolean,undefined,BigInt

const score=100
const scorevalue=123.3

const idLoggedIn=false
const outsideTemp=null
let userEmail;
// let userEmail=undefined


const id=Symbol('123')
const anotherId=Symbol("123")
console.log(id== anotherId) //false


const bigNumber=1345678876543n // bigInt


// Reference (Non Primitive) -->

// Arrays,Objects,functions

const heors=["shaktiman","naagraj","doga"];
let myObj={
  name:"nitesh",
  age:21,
}

const myFunction = function(){
  console.log("Hello Nitesh")
}

// console.log(typeof heors)


// ===========================++++++++++==================

// Stack (Primitive), Heap (non-primitive)

let myName = "niteshKumar"