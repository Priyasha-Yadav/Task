// Moderate-Level Questions
// 1. Write a function that takes a digit (0-9) as input and returns the corresponding word. For example, input 1 should return "one".

#include <stdio.h>

int main(){
    int n;
    printf("Enter the number(0-9): ");
    scanf("%d", &n);
    switch (n){
        case 0 : 
        printf("Zero\n");
        break; 

        case 1 :
        printf("One\n");
        break;
          case 2 :
        printf("Two\n");
        break;
          case 3 :
        printf("Three\n");
        break;
          case 4 :
        printf("Four\n");
        break;
          case 5 :
        printf("Five\n");
        break;
          case 6 :
        printf("Six\n");
        break;
          case 7 :
        printf("Seven\n");
        break;
          case 8 :
        printf("Eight\n");
        break;
          case 9 :
        printf("Nine\n");
        break;  
    }

    return 0;
}