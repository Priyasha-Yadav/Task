
//19. Check if the array arr = [1, 2, 3, 4, 5] is sorted in ascending order, and print true or false.

#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int length = sizeof(arr) / sizeof(arr[0]);
    int isSorted = 1;

    for (int i = 0; i < length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isSorted = 0;
            break;
        }
    }

    if (isSorted) {
        printf("True\n");
    } else {
        printf("False\n");
    }

    return 0;
}
