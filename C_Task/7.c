
// 7. Write a function that simulates a traffic light system. 
//The function should take the current light color (red, yellow, green) 
//as input and print the corresponding action:
// "red" → "Stop"
// "yellow" → "Slow down"
// "green" → "Go"

#include <stdio.h>
#include <string.h>
int main(){
char str[10];
printf("Light: ");
scanf("%9s", str);
if(strcmp(str,"Red")==0){
    printf("Stop \n");
}
else if(strcmp(str,"Yellow")==0){
    printf("Slow Down \n");
}
else if(strcmp(str,"Green")==0){
    printf("Go \n");
}
return 0;
}