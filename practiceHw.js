function nAme(){
    return "Abdullah al Noman";
}
console.log(nAme());

// practice again

let ticket = 650;
let age = 56;

if(age < 15 ){
    let discountPrice = ticket * 25 / 100;
    let payAble = ticket - discountPrice;
    console.log("You have 35% discount on your ticket ", payAble)
}else if( age > 18 && age < 45){
    let discount = ticket * 5 / 100;
    let payableAmount = ticket - discount;
    console.log("You have only 5% discount only for EID. You have to pay " +  payableAmount + "amount")
}else{
    console.log(ticket)
}