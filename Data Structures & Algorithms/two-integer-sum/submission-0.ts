class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hashMap = new Map()

        for(let i :number = 0; i <nums.length;i++){
            let complement = target - nums[i]
            if(hashMap.has(complement)){
                complement = hashMap.get(complement)
                return [i,complement]
            }else{
                hashMap.set(nums[i],i)
            }
        }

return []

    }
}
