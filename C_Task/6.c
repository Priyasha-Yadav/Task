
// 6. Write a function that checks if a username and password match predefined values. 
// If the username is "admin" and the password is "1234", print "Login successful"; 
// otherwise, print "Login failed."

#include <stdio.h>
#include <string.h>

int main() {
    int password;
    char str[6];  

    printf("Enter a string: ");
    scanf("%5s", str); 

    printf("Enter Password: ");
    scanf("%d", &password);

    if(strcmp(str, "Login") == 0 && password ==1234){
        printf("Login Successful \n");
    }
    else{
        printf("Login Failed \n");
    }


   return 0;
}
