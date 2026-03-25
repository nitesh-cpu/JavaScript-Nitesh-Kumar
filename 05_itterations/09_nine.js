const myNums=[1,2,3]

// const myTotal =  myNums.reduce(function (acc , currval){
//   return acc+currval
// },0)

const myTotal=myNums.reduce( (acc,currval) => acc + currval ,0)

console.log(myTotal)


const shopping = [{
  itemName: " js course",
  price:299
},
{
  itemName: " cpp course",
  price:999
},
{
  itemName: " py course",
  price:599
},
{
  itemName: "mob course",
  price:2999
}
]

const priceToPay = shopping.reduce((acc, item) => acc + item.price, 0); 

console.log(priceToPay)