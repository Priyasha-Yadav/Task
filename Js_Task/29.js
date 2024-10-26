
// 29.Write a program to find all pairs in an array whose sum is equal to a given number.
// Example 1:  Input: nums = [2,7,11,15], target = 9 , Output: [0,1].

function array_target(arr, target) {
    let array = [];
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                array.push(i,j)
            }
        }
    }
    console.log(array);
}
array_target([2, 7, 11, 15], 9)