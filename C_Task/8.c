
//8. Find the Average of an Array.

#include <stdio.h>
int main(){
    int i, sum=0;
    int arr[5]={1,2,3,4,5};
    int len = sizeof(arr)/sizeof(arr[0]);
    for(i=0;i<len;i++){
        sum+=arr[i];
    }
    printf("Average: %d\n", sum/len);
    return 0;
}