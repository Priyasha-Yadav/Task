
//21. Write a program to convert a given string to uppercase.Example: Input: "hello", Output: "HELLO".

#include <stdio.h>
#include <string.h>

int main() {
    int n;
    printf("Enter number of letter: ");
    scanf("%d",&n);
    char str[n+1]; 
    printf("Enter the string: ");
    scanf("%s", str);


    for (int i = 0; i < strlen(str); i++) {
       
        if (str[i] >= 'a' && str[i] <= 'z') {
            str[i] = str[i] - ('a' - 'A'); 
        }
    }

    printf("%s\n", str); 

    return 0;
}
