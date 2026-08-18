class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {        
    const NMap = new Map<number,number>();
    const BucketArray :number[][]= Array.from({length : nums.length +1 },() => [])
    const result:number[]=[];

    for(const num of nums){
        NMap.set(num,(NMap.get(num)|| 0) +1)
    }

    for(const [key,value] of NMap.entries() ){
        BucketArray[value].push(key)
    }

    for (let i = nums.length ;i >=0 ; i--){
        if (BucketArray[i].length > 0){
           for(let num of BucketArray[i]){
            result.push(num) 
            if (result.length === k){
                return result
            }
           }
        }
    }


}
}
