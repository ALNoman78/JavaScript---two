//  if condition true then print this
// practice task - 01


// let  burgerPrice = 599;
// if (burgerPrice > 500){
//     console.log(" Burger more than 500tk: free Coke")
// }else{
//     console.log("coke price 39 taka")
// }


// let  friedRice = 399;
// if (friedRice > 500){
//     console.log(" Burger more than 500tk: free Coke")
// }else{
//     console.log("coke price 39 taka")
// }


// complex condition

let salary = 32000;
let isBCS = true;
let height = 66;

if((salary > 380000 && height > 64) || isBCS == false){
    console.log("You are eligible to marry")
}else if(salary > 30000 && (isBCS == false || height < 85)){
    console.log("You are ok to marry")
}else{
    console.log("You aren't eligible to married n")
}