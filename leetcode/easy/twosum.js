// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let storage = {}
    //take each element of nums, and break it down into index and num
    for(let [index,num] of nums.entries()){
        //if the key of num for that element in the storage object exists, return           the index value stored in the num key of the storage object, as well as the         index of the element we're currently on
        if(storage[num] !== undefined) return [storage[num], [index]]
        //if the key doesn't exist for that number, place a target-num : index key           value pair in the object
        else{
            storage[target-num] = index;
        }
    }
    
};
