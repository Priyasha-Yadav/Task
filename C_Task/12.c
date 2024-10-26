
//12. Add the number 6 to the end of the array arr = [1, 2, 3, 4, 5] and print the updated array.

#include <stdio.h>
int main(){
    int arr[6] = {1,2,3,4,5};
    int len =sizeof(arr)/sizeof(arr[0]);
    arr[5]= 6;
    int i=0;
     for (int i = 0; i < len; i++) {
        printf("%d\n", arr[i]); 
    }

    return 0;
}