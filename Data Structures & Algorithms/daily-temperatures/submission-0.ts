class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack = []
        let result = new Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length ; i++){
            if(stack.length === 0 || temperatures[i] <= temperatures[stack[stack.length-1]] ){
                stack.push(i)
            }else{
                while(temperatures[i] > temperatures[stack[stack.length-1]]){
                let temp = stack.pop()
                result[temp] = i - temp
                }
                stack.push(i)
            }

        }
        return result

    }
}
