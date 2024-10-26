
// 3. Write a function that takes three sides of a triangle and checks whether the triangle is equilateral, isosceles, or scalene.

function check_triangle(side1, side2, side3) {
    
    if (side1 === side2 && side2 === side3) {
        console.log('Equilateral Triangle');
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log('Isosceles Triangle');
    }
    else {
        console.log('Scalene Triangle');
    }
}