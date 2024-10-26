// 19. Check if the array arr = [1, 2, 3, 4, 5] is sorted in 
// ascending order, and print true or false.

let falsy=0;
let arr =[1,2,3,4,5]
for(i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        falsy++
        
    }
}
if(falsy>=1){
    console.log(false)
}
else{
    console.log(true)
}


