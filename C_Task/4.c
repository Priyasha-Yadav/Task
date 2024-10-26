
//4. Write a function to check whether a given character is a 
//vowel or consonant.

#include <stdio.h>
int main(){
    char character;
    printf("Enter the Alphabet: ");
    scanf("%c", &character);
    if(character=='a'||character=='e'||character=='i'||character=='o'||character=='u'){
        printf("Vowel \n");
    }
    else{
        printf("Consonant \n");
    }
    return 0;
}