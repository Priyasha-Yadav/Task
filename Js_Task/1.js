
// 1. Write a function to check the grade of a student based on the score:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

function check_grade(marks) {
    if ((marks <= 100) && (marks >= 90)) {
        console.log('A')
    }
    else if ((marks <= 89) && (marks >= 80)) {
        console.log('B')
    }
    else if ((marks <= 79) && (marks >= 70)) {
        console.log('C')
    }
    else if ((marks <= 69) && (marks >= 60)) {
        console.log('D')
    }
    else {
        console.log('F')
    }

}