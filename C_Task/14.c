
//14. Add Element to the Beginning of an Array Example: Input: nums = [1, 2, 3, 4]; Output: nums = [0,1,2,3,4].

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
    int num;

    int nums[4] = {1, 2, 3, 4};
    printf("Enter the number: ");
    scanf("%d",&num);
    int length = sizeof(nums)/sizeof(nums[0]);
        int new_nums[length+1];

    for(int i = length-1;i>=0;i--){
        new_nums[i+1]=nums[i];
    }

new_nums[0]=num;

   printf("{");

      for (int j = 0; j < length+1; j++) {
       
        if (j != 0) {
            printf(", ");
        }
        printf("%d", new_nums[j]);
    }
    printf("}\n");
      

    return 0;
}