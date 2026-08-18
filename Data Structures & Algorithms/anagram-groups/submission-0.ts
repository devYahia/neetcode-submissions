class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
                let hashMap = new Map()
        for(let i = 0 ; i< strs.length ; i++){
            let sorted = strs[i].split('').sort().join('')
            if(!hashMap.has(sorted)){
                hashMap.set(sorted,[])
                                hashMap.get(sorted).push(strs[i])

            }else{
                hashMap.get(sorted).push(strs[i])
            }
        }
    return Array.from(hashMap.values());
    }
}
