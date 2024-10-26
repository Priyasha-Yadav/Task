
// 3. Write a simple calculator function that takes two numbers and an operator (+, -, *, /) as input, then returns the result of the operation.

#include <stdio.h>

int main(){
    int num1, num2;
    char operator;
    printf("Enter the first number: ");
    scanf("%d", &num1);

     printf("Enter the second number: ");
    scanf("%d", &num2);

    while (getchar() != '\n');
    printf("Enter the operation to be performed (+ - / *): ");
    scanf("%c", &operator);

if(operator == "*")
printf("%d", num1*num2);





    return 0;
}
