
// 10. Given an array of integers, count how many numbers are even and how many are odd.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: Even: 2, Odd: 3

#include <stdio.h>
int main(){
//    int n;

//     printf("Enter the size of the array: ");
//     scanf("%d", &n);

//     int arr[n];

//     printf("Enter %d elements:\n", n);
//     for (int index = 0; index < n; index++) {
//         printf("Element %d: ", index + 1);
//         scanf("%d", &arr[index]);
//     }

    int i, even=0;
    int arr[5]={1,2,3,4,5};
    int len = sizeof(arr)/sizeof(arr[0]);
    for(i=0;i<len;i++){
        if(arr[i]%2 == 0){
            even++;
        }
    }
    printf("Even: %d Odd: %d \n", even, len-even);

    return 0;
}