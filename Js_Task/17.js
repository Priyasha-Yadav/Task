
// 17. Count how many positive and negative numbers are in 
// arr = [1, -2, 3, -4, 5, -6] and print the result.


function count_positive(arr) {
    let i = 0;
    count = 0
    while (arr[i] != undefined) {
        if (arr[i] < 0) {
            count++
            
        }
         i++
}

console.log('Negative: ',count, 'Positive: ', arr.length-count)   

}