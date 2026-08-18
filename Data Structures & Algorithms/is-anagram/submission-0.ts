class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }

        let sorteds = s.split('').sort().join('')
        let sortedt = t.split('').sort().join('')
        
            if (sorteds !== sortedt){
        return false
            }
        return true;
    }
}
