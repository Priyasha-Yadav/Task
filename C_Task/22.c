
//22. Write a program to find the length of a given string.

#include <stdio.h>
int main(){
    char string[6]="hello";
    int i=0;
    while(string[i]!= '\0'){
        i++;
    }
    printf("%d \n", i);

}