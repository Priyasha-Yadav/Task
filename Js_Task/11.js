// 11. Remove duplicate elements from the array arr = [1, 2, 2, 3, 4, 4, 5] 
//and print the updated array.

let arr = [1,2,2,3,4,4,5]
let new_arr=[];
for(i=0;i<arr.length;i++){
    if(!new_arr.includes(arr[i])){
        new_arr.push(arr[i])
    }
}
console.log(new_arr)

//

let new_set = Array.from((new Set (arr)))
console.log(new_set)