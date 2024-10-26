
// 11. Remove duplicate elements from the array arr = [1, 2, 2, 3, 4, 4, 5] 
// and print the updated array.
//approach is check if the number already exists in the new array if yes then don't add if no then add


#include <stdio.h>

int main() {
    int arr[7] = {1, 2, 2, 3, 4, 4, 5};
    int arr1[7]; 
    int i, j, isDuplicate;
    int length = sizeof(arr) / sizeof(arr[0]);
    int uniqueCount = 0;

    for (i = 0; i < length; i++) {
        isDuplicate = 0;
      
        for (j = 0; j < uniqueCount; j++) {
            if (arr[i] == arr1[j]) {
                isDuplicate = 1; 
                break;
            }
        }
     
        if (!isDuplicate) {
            arr1[uniqueCount] = arr[i];
            uniqueCount++;
        }
    }


    printf("{");
    for (i = 0; i < uniqueCount; i++) {
        if (i != 0) {
            printf(", ");
        }
        printf("%d", arr1[i]);
    }
    printf("}\n");

    return 0;
}



// #include <stdio.h>
// int main()
// {
//    int arr1[] ={1,2,2,3,3,4};
   
//     int len1 = sizeof(arr1)/sizeof(arr1[0]);
//     int arr2[10]= {};
//     int len2 = 0;
//     int i;
//     int j;
//   for(i = 0;i<len1;i++){
//       int count = 0;
//       for(j=0;j<len2;j++){
        
//           if(arr1[i] != arr2[j]){
//               count++;
//           }
//       }
//       if(count == len2){
//           arr2[len2]=arr1[i];
//           len2 ++;
      
//        }
//   }
//   int z;
// for(z =0;z<len2;z++){
//   printf("%d",arr2[z]);
// }
// }