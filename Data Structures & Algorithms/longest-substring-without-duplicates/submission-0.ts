class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let hashMap = new Map()
        let maxSupString = 0
        let left = 0
        let right = 0

        while(right < s.length){
            let chr = s[right]
            if(hashMap.has(chr)&& hashMap.get(chr) >= left){
                left = hashMap.get(chr) + 1
            }
            maxSupString = Math.max(maxSupString,right - left +1 )
            hashMap.set(chr, right);
            right++
        }
        return maxSupString
    }
}
