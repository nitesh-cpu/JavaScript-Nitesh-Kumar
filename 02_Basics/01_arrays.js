// Array

const myArr=[2,3,4,5,6,7,8]
console.log(myArr[0])

const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);

// Arrays methods

// myArr.push(9)
// myArr.push(0)
// myArr.pop(0)


// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr=myArr.join()

console.log(myArr)
console.log( typeof newArr)


// Slice and Splice

console.log("A ", myArr);
const myn1 = myArr.slice(1 ,3)

console.log(myn1)
console.log("B ",myArr)


const myn2=myArr.splice(1,3)
console.log(myn1)
