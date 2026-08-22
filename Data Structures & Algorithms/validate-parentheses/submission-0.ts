class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
      let closedOnes = new Map( [[")","("],["]","["],["}","{"]])
      let stack = []
      
      for(let i = 0;i < s.length;i++){
         let lastindex = stack.length-1
         if(!closedOnes.has(s[i])){
            stack.push(s[i])
         }else if(closedOnes.has(s[i]) && stack[lastindex] === closedOnes.get(s[i])){
            stack.pop()
         }else {
            return false
         }
      }
      return stack.length === 0
    }
}
