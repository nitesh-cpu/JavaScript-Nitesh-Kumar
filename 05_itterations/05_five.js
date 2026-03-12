const coding = ["js","rubby","java","cpp"]

// coding.forEach( function (item) {
//   console.log(item)
// })

coding.forEach( (item)=>{
  // console.log(item)
})    // arrow function


function printMe(item){
  // console.log(item)
}
coding.forEach(printMe)


// coding.forEach( (item,index,arr)=>{
//   console.log(item,index,arr)
// })

const myCoding=[
  {
    languageName:"java",
    languageFileName:"js"
  },
  {
    languageName:"java",
    languageFileName:"java"
  },
  {
    languageName:"python",
    languageFileName:"py"
  },
]

myCoding.forEach((item)=>{
  console.log(item.languageName)
})