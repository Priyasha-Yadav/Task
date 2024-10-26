
//23. Write a program to concatenate two given strings. Example: Input: ("hello", " world"), Output: "hello world".

#include <string.h>
#include <stdio.h>

void concat(){
    char str1[50] = "Hello"; 
    char str2[7] = " World";
    strcat(str1,str2);
    printf("%s\n", str1);
}

int main(){
char str1[100];
printf("Enter the string: ");
scanf("%99s", str1);

char str2[100];
printf("Enter the second string: ");
scanf("%99s", str2);
strcat(str1," ");
strcat(str1,str2);
printf("%s\n",str1);

concat();
    return 0;
}