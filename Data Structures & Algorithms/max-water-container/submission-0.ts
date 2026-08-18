class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let right:number = heights.length - 1;
        let left:number = 0;
        let maxArea = 0

        while(left < right){
            let width = right - left;
            let currentHeight = Math.min(heights[left],heights[right]);
            let currentArea = width * currentHeight
            maxArea = Math.max(maxArea,currentArea)

            if(heights[left] > heights[right]){
                right--
            }else{
                left++
            }
        } 
        return    maxArea;
    }

}