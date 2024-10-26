
//15. Remove the Last element Input: nums = [1, 2, 3, 4,5]; Output: nums = [1,2,3,4].

#include <stdio.h>

int main(){
       //    int n;

    // printf("Enter the size of the array: ");
    // scanf("%d", &n);

    // int nums[n];
    // printf("Enter %d elements:\n", n);
    
    // for (int index = 0; index < n; index++) {
    //     printf("Element %d: ", index + 1);
    //     scanf("%d", &nums[index]);
    // }
    int  nums[5] = {1, 2, 3, 4, 5};
   int length=sizeof(nums)/sizeof(nums[0]);
int new_nums[length-1];
printf("{");
for(int i=0;i<length-1;i++){
    new_nums[i]=nums[i];
    if(new_nums[i]!=1){
        printf(", ");
    }
    printf("%d",new_nums[i]);

}
printf("}\n");

    return 0;

}