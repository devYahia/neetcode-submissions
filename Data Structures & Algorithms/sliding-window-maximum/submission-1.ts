class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
    let result = []
    let q = []

    for(let i = 0; i < nums.length; i++){
        if(q.length > 0 && q[0] <= i - k ) {
            q.shift()
        }
        while(q.length > 0 && nums[i] > nums[q[q.length -1]]){
            q.pop()
        }
        q.push(i)

        if(i >= k-1){
        result.push(nums[q[0]])
        }

    }   
    return result}
}
