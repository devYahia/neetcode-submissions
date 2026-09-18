class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for (const row of matrix) {
                let lo = 0
                let hi = row.length-1
            if( target >= row[0] && target <= row[row.length-1]){
            while (hi >= lo){
                const mid = lo + Math.floor((hi - lo)/2)

                if(row[mid] === target){
                    return true;
                } else if (target > row[mid]){
                    lo = mid +1
                }else{
                    hi = mid -1
                }

            }
            return false;
            }
        }
        return false

    }
}
