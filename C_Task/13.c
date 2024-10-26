
//13. Check if the array arr = [1, 2, 3, 4, 5] contains the number 3 and print true or false.

#include <stdio.h>

int main() {
    int num;
    printf("Enter the number: ");
    scanf("%d", &num);
    
    int istrue = 0;
    int arr[5] = {1, 2, 3, 4, 5};
    int length = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < length; i++) {
        if (arr[i] == num) {
            istrue = 1;
            break;
        }
    }

    if (istrue) {
        printf("True\n");
    } else {
        printf("False\n");
    }

    return 0;
}
