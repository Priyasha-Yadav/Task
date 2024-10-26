// 20. Find and print the difference between the maximum and 
// minimum elements in arr = [80, 30, 70, 50, 20].

let arr = [80, 30, 70, 50, 20]
console.log(Math.max(...arr)- Math.min(...arr))

//

let max=arr[0], min=arr[0];
for(i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
    if(min>arr[i]){
        min=arr[i]
    }
}
console.log(max-min)