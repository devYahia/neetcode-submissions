class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let maxLength = 0
        let counts = new Map()
        let maxFreq= 0
        for(let right:number = 0 ; right < s.length; right++){
            let chr = s[right]
            counts.set(chr,(counts.get(chr) || 0) +1)
            maxFreq = Math.max(maxFreq,counts.get(chr))
            while((right - left + 1) - maxFreq > k ){
                counts.set(s[left],(counts.get(s[left]) || 0) -1)
                left++
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength
    }
}
