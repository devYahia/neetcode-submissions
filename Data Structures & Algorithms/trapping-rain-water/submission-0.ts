class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left :number = 0 ;
        let right :number =height.length -1;
        let maxLeft :number= 0;
        let maxRight :number= 0;
        let water :number= 0;

        while( left < right ){
            if(height[left] <= height[right]){
                if(height[left] >= maxLeft){
                    maxLeft= height[left];
                }else{
            water += maxLeft-height[left]
                }
            left++
            }else{
                if(height[right] >= maxRight){
                     maxRight= height[right];
                }else{
                water += maxRight-height[right]
                }
                right--

            }

        }
        return water
    }
}
