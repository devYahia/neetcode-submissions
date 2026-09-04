class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left:number = 0
        let right:number = 0
        let maxValue :number = 0

        while(right < prices.length ){
            if(prices[right] < prices[left]){
                left = right
            }
            maxValue = Math.max(maxValue,prices[right] - prices[left])
            right++
        }
        return maxValue;

    }
}
