
// 20. Find and print the difference between the maximum and minimum elements 
//in arr = [80, 30, 70, 50, 20].


#include <stdio.h>
int main(){
    int arr[6]={2,3,4,5,6,5};
    int max, min,i = 0;
    max= arr[0];
    min=arr[0];

    int len=sizeof(arr)/sizeof(arr[0]);
    for(i=0;i<len-1;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        if(min>arr[i]){
            min=arr[i];
        }
    }
    printf("%d", max-min);
    return 0;


}