
// 17. Count how many positive and negative numbers are in arr = [1, -2, 3, -4, 5, -6] and 
// print the result.

#include <stdio.h>

int main(){
int arr[6]={1,-2,3,-4,5,-6};
int count_Positive=0;
int length=sizeof(arr)/sizeof(arr[0]);
for(int i =0;i<length;i++){
    if(arr[i]>0){
        count_Positive++;
    }
}
printf("Positive: %d Negative: %d \n", count_Positive, length - count_Positive);
    return 0;
}