
// 40. Given two numbers, generate an array containing all numbers between them (inclusive). 
// Example: Input: 1,5 Output: [1, 2, 3, 4, 5]

function cont(from, to){
    let arr=[];
    for(i=from;i<=to;i++){
        arr.push(i)
    }
console.log(arr)
}
cont(1,5)