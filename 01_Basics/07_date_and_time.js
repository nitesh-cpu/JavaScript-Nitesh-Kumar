// date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,12)
// let myCreatedDate = new Date(2023,0,12,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
// console.log(Date.now())

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

// `${newDate.getDay()} and time `

newDate.toLocaleString('default', {
weekday: "long",
})