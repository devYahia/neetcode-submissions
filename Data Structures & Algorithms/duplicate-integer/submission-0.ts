class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const temp = new Set(nums)
        if (temp.size !== nums.length){
            return true
        }else{
            return false
        }
        
    }
}
