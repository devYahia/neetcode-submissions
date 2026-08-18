class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let cleanS = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
        let right =cleanS.length -1
        let left = 0
        while(left < right){
            if(cleanS[right] !== cleanS[left]){
                return false
            }
            right--;
            left++;
        }
        return true
    }
}
