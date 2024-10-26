
//2. Write a function to determine whether a given number is positive, negative, or zero.

#include <stdio.h>
int main(){
    int number;
    printf("Enter the number: ");
    scanf("%d", &number);
    if(number==0){
        printf("Zero \n");
    }
    else if(number>0){
        printf("Positive \n");
    }
    else{
        printf("Negative \n");
    }
}