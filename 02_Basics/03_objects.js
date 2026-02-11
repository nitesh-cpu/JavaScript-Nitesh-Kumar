// singleton
 


// object literals

const mySym=Symbol("key1")
const JsUser={
  name:"nitesh",
  "full name":"nitesh kumar mehta",
  city:"Hazaribagh",
 [mySym]:"mykey1",
  age:19,
  email:"niteshgoogle.com",
  isLoggedIn:false,
  lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email="nitesh@chat.com"
// Object.freeze(JsUser);
JsUser.email="nitesh@microsoft.com"
// console.log(JsUser)



JsUser.greeting = function(){
  console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())