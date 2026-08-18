class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rset = Array.from({length : 9}, () => new Set());
        let cset = Array.from({length : 9}, () => new Set());
        let BoXset = Array.from({length : 9}, () => new Set());

        for (let r:number = 0; r < 9 ; r++){
            for (let c:number = 0; c < 9; c++){
                let val = board[r][c]
                let boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3)  
            if(val === ".") continue
            if ( rset[r].has(val) || cset[c].has(val) || BoXset[boxIndex].has(val)){
                return false
            }else{
                rset[r].add(val)
                cset[c].add(val)
                BoXset[boxIndex].add(val)
            }
            }
        }
return true

        
        
    }
}