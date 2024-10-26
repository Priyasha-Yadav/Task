

// 33. Write a program that takes a year as input and 
// checks whether it is a century year (a year divisible by 100).

function century(year){
    if(year%100==0){
        console.log("True")
    }
    else{
        console.log("False")
    }
}
century(1800)