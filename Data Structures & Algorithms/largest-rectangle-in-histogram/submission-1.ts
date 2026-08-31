class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // Input: heights = [7,1,7,2,2,4]
    largestRectangleArea(heights: number[]): number {
        let stack : number[][]= [];  // pairs [index,height];
        let maxArea :number = 0;
        
        for(let i =0; i < heights.length ; i++){
            let start = i;

            while(stack.length > 0 &&  stack[stack.length -1][1] > heights[i]){
                let index = stack.pop()
                maxArea = Math.max(maxArea,(i-index[0])*index[1])
                start = index[0]
            }
        stack.push([start,heights[i]])
        }

        while (stack.length > 0){
            let index  = stack.pop()
            maxArea = Math.max(maxArea,(heights.length-index[0])*index[1])
        }
        return maxArea;
    }
}
