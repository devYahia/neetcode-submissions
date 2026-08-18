class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix:number[] =[1]
        let suffix:number[] =[]
        suffix[nums.length -1] = 1
        let result:number[] = []
        
        let k:number = 1
        for(let i:number =1; i < nums.length; i++){
            k*= nums[i-1]
            prefix.push(k)
        }

        k = 1
        for(let i:number =nums.length -2; i >= 0; i--){
            k*= nums[i+1]
            suffix[i] = k
        }

        for(let i:number =0; i < nums.length; i++){
            result.push(prefix[i] * suffix[i])
        }

        return result;
    }
}
