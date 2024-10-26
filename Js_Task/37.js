
// 37. Given a sorted array and a target value, 
// return the starting and ending position of that target in the array.
// Example:Input: [5, 7, 7, 8, 8, 10], target=8 ,Output: [3, 4]


function array_target(arr, target) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target && arr[i+1]==arr[i]) {
            indices.push(i,i+1);
        }
    }
    console.log(indices);
}

array_target([5, 7, 7, 8, 8, 10], 8);
