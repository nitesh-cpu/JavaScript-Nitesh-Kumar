const user ={
  username:"nitesh",
  price:999,


  welcomeMessage: function(){
    console.log(`${this.username} welcome to website`)
    console.log(this)
  }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this) // but inside object it is a window object


// function chai(){
//   let username="nitesh"
//   console.log(this.username);
// }
// chai()



// const chai = function (){
//   let username="nitesh"
//   console.log(this.username);
// }
// chai()


const chai =  () => {
  let username="nitesh"
  console.log(this.username);
}
// chai()


// const addTwo = (num1,num2) =>{
//   return num1+num2
// }


// const addTwo = (num1,num2) => (num1+num2)


const addTwo = (num1,num2) => ({username: "nitesh"})

console.log(addTwo(5,10))