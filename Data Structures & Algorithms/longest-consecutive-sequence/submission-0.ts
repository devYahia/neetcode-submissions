class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
    let consecutiveSet = new Set(nums)
    let maxStreak = 1;
    if(consecutiveSet.size === 0) return 0;

    for(let num of consecutiveSet){
            let currentNum = num;
            let currentStreak = 1;

        if(!consecutiveSet.has(num-1)){
            while(consecutiveSet.has(currentNum+1)){
                currentNum++;
                currentStreak++;
            }
            maxStreak = Math.max(maxStreak,currentStreak)
        }

        
    }        
    return maxStreak;
    }
}
