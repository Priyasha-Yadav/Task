
// 3. Write a function that takes three sides of a triangle and checks whether the triangle is 
// equilateral, isosceles, or scalene.

#include <stdio.h>

int main() {
    int side1, side2, side3;   
    printf("Enter the lengths of the three sides (comma-separated): ");
    scanf("%d, %d, %d", &side1, &side2, &side3);  
    if(side1==side2 && side2 == side3){
        printf("Equilateral \n");

    }
    else if(side1 == side2 || side2 == side3){
        printf("Isoceles \n");
    }

    else if( side1!= side2 && side2!=side3){
        printf("Scalene \n");
    }


    return 0;
}
