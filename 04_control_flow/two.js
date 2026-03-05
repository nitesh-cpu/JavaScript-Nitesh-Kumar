// switch (key){
//   case value:
//     break;

//   default:
//     break;
// }

const month=4;
switch (month){
 
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("feburary");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break; // agar kahi uppar me match ho gaya tab phir koi bhi execute nahi hoga except default ke. impo
    // case "nitesh" for string
  default:
    console.log("none of them");
    break;
}