// const userEmail="nitesh@gmail.com"

// if (userEmail){
//   console.log("got user email")
// }else{
//   console.log("don't have user email")
// }


// falsy values
// false ,0 ,-0,BigInt,0n,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}


// userEmail=[]
// if (userEmail.length === 0){
//   console.log("Aray is empty");
// }


const emptyObj={}

if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty")
}

// Nullish coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1);

// let val1;
// val1 = null ?? 10
// console.log(val1)


// let val1;
// val1 = undefined ?? 10
// console.log(val1)

let val1;
val1 = undefined ?? 10 ?? 15
console.log(val1)



// Terinary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")