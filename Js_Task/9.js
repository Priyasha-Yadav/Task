// 9. Sort an Array in Ascending Order Example: Input: nums = [4,2,8,5,1]; Output: nums = [1,2,4,5,8].

function sort_arr(arr) {
    console.log(arr.sort((a, b) => a - b))

}

const nums = [4, 2, 8, 5, 1];

for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", nums);
