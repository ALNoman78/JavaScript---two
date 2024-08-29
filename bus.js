/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// practice six
let ticket = 800;
let age = 77;
let isStudent = true;

if (age < 10) {
    console.log("Ticket free for you are  ony ", age);
}else if(age <= 25  && isStudent ){
    let discountTicket = ticket * 50 /100;
    let payAbleMoney = ticket - discountTicket;
    console.log(payAbleMoney)
}else if (age >= 60 && age <= 100){
    let discountedTicketPrice = ticket * 15 / 100;
    let payableAmount = ticket - discountedTicketPrice;
    console.log("You  are senior citizen ", payableAmount)
}else{
    console.log("All ticket price ", ticket)
}
