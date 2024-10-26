
// 14. Add Element to the Beginning of an Array Example: Input: nums = [1, 2, 3, 4]; Output: nums = [0,1,2,3,4].

let nums = [1, 2, 3, 4]
nums.unshift(0)
console.log(nums)


//
const newElement = 0;
let newArray =[];
newArray.length = nums.length + 1; 

for (let i = 0; i < nums.length; i++) {
    newArray[i + 1] = nums[i]; }
    
    newArray[0] = newElement;
    console.log(newArray); 
