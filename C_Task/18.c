
//18. Print all elements that are at even indexes in the array arr = [10, 20, 30, 40, 50].

#include <stdio.h>

int main(){
    int arr[5] = {10,20,30,40,50};
    int length = sizeof(arr)/sizeof(arr[0]);
    printf("{");
for(int i = 0; i<length;i++){
   
    if(i%2==0){
         if(i!=0){
        printf(", ");
    }
printf("%d", arr[i]);
    }
}    
printf("}\n");

    return 0;
}


