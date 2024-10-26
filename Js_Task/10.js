
// 10. Given an array of integers, count how many numbers are even and how many are odd.
// Example
// Input: [1, 2, 3, 4, 5]
// Output: Even: 2, Odd: 3


function even_odd(arr) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++
        }
    }
    console.log('Even:', count, 'Odd:', arr.length - count)

}