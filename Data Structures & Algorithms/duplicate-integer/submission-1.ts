class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
function sorting(nums){
        for(let i = 0; i< nums.length;i++){
            let swapped = false
            for(let j = 0; j <nums.length-1-i;j++){
                if (nums[j]>nums[j+1]){
                    [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
                    swapped = true
                }
            }
            if(!swapped){
                    break;
                    }
        }   
                    return nums
    }

    let sorted = sorting(nums)
    for(let i = 0 ; i< sorted.length; i++){
        if(sorted[i] === sorted[i+1]){
            return true
        }
    }
                return false


    }

}
