// 976. Largest Perimeter Triangle

// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

// Example 1:
// Input: nums = [2,1,2]
// Output: 5

// Example 2:
// Input: nums = [1,2,1]
// Output: 0

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

var largestPerimeter = function(nums) {
    // if(nums[0] == 0 || nums[1] == 0 || nums[2] == 0){
    //     return 0
    // }
    // else if (nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums [1] && nums[2] + nums[1] > nums[0]){
    //     return nums.reduce((sum, current) => sum += current, 0)
    // }
    // else{
    //     return 0
    // }

    return nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums [1] && nums[2] + nums[1] > nums[0] ? nums.reduce((sum, current) => sum += current, 0) : 0

};