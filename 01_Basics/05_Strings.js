const name = "Nitesh"
const reopCount=50;

// console.log(name + reopCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${reopCount}`)

const gameName = new String('Hitesh-HC')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(1))
console.log(gameName.indexOf('t'))


const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne ="  hitesh "
console.log(newStringOne)
console.log(newStringOne.trim())


const url="https://nitesh.com/hitesh%20mehta"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))


