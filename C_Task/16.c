
// 16. Check if all the elements in arr = [3, 5, 9, 1, 7] are positive numbers, and
// print true or false.

#include <stdio.h>

int main()
{

    int arr[5] = {3, 5, 9, 1, 7};
    int isNegative = 0;
    int length = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < length; i++)
    {
        if (arr[i] < 0)
        {
            isNegative = 1;
            break;
        }
    }
    if (!isNegative){
        printf("True \n");
    }
    else{
        printf("False \n");
    }

        return 0;
}