class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let tMap = new Map();
        let WindowMap = new Map();
        let left = 0;
        let have = 0;
        let minLen = Infinity;
        let startIdx = 0;
        Array.from(t).forEach(letter => {tMap.set(letter,(tMap.get(letter) || 0) +1) });

        for(let right = 0; right < s.length; right++){
            WindowMap.set(s[right],(WindowMap.get(s[right]) || 0) +1 )

            if(tMap.has(s[right]) && WindowMap.get(s[right]) === tMap.get(s[right])){
                have++
            }

            while(have === tMap.size){
            if((right - left +1) < (minLen)){
                minLen = right - left +1 
                startIdx = left
            }
            WindowMap.set(s[left],(WindowMap.get(s[left]) || 0 )-1)
            if(tMap.has(s[left]) && WindowMap.get(s[left]) < tMap.get(s[left])) have--
            left++
            }

        }
        if(minLen === Infinity){ 
            return ""
        } else{
        return s.slice(startIdx,startIdx+minLen)
        }
    }
}
