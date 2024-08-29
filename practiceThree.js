/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let result = 98;

if (result > 90 && result <= 100 ) {
    console.log("You Got A",result );
} else if ( result > 80 &&  result < 89) {
    console.log("You Got B", result)
}else if ( result > 70 &&  result < 79) {
    console.log("You Got C", result)
}else if ( result > 60 &&  result < 69) {
    console.log("You Got D", result)
}else{
    console.log("You're not passed")
}