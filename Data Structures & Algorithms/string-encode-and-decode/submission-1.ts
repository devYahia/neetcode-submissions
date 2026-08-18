class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
    let strigify : string = '' 
    for(let i = 0;i < strs.length;i++){
        let word = strs[i]
        if(word !== undefined){
            strigify+=`${word.length}#${word}`
        }
    }
return strigify}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let arraify :string[] = []
        let i = 0
        while(i < str.length){
            let j = i;
            while(str[j]!== '#') j++;
            let length = parseInt(str.substring(i,j))
            let word = str.substring(j+1,j+length+1)
            arraify.push(word)

            i = j+1+length
            
        }
        return arraify;
}
}