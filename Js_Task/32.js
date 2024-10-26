

// 32.Write a program that categorizes a person’s age group based on the given age:
// Less than 13: "Child"
// Between 13 and 19: "Teenager"
// Between 20 and 59: "Adult"
// 60 and above: "Senior"

function age(age){
    if(age<=13 && age>=0){
        console.log("Child")
    }
    else if(age>13 && age <=19){
        console.log("Teenager ")
    }
    else if (age>=20 && age<=59){
        console.log("Adult")
    }
    else{
        console.log("Senior")
    }

}
age(60)