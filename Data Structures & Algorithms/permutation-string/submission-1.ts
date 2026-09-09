class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let s1Arr = Array(26).fill(0)
        let s2Arr = Array(26).fill(0)
        let Achar = 'a'.charCodeAt(0);
        if (s1.length > s2.length) return false

        for(let i = 0; i < s1.length; i++){
            s1Arr[s1.charCodeAt(i) - Achar]++;
            s2Arr[s2.charCodeAt(i) - Achar]++;
        }

        function areEqual(arr1,arr2){
            for(let j = 0 ;j < arr2.length ; j++){
                if(arr1[j] !== arr2[j]){
                    return false
                }
            }
        return true
        }

        if (areEqual(s1Arr , s2Arr)) return true

        for(let right = s1.length; right < s2.length; right++){
            let addIndex = s2.charCodeAt(right) - Achar
            let removeIndex = s2.charCodeAt(right - s1.length) - Achar

            s2Arr[addIndex]++
            s2Arr[removeIndex]--

            if (areEqual(s1Arr , s2Arr)) return true
        }
    return false
    }
}