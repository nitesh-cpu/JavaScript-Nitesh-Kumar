// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//   console.log(`DB connected`);
// }
// chai()



// (function chai(){
//   console.log(`DB connected`);
// })();

// (function aurcode(){
//   console.log(`DB connected`);
// })()



( (name) => {
  console.log((`DB connected two ${name}`))
})(`nitesh`)