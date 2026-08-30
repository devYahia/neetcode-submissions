class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let cars: [number, number][] = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a,b)=> b[0]-a[0])
        let stack = []
        let counter = 0

        for(let i =0 ;i < position.length;i++){
            let timeToArrive = (target - cars[i][0]) / cars[i][1]

            if(stack.length === 0){
                stack.push(timeToArrive)
            }else if (timeToArrive > stack[stack.length-1]){
                stack.length = 0;
                counter++;
                stack.push(timeToArrive)
            }

        }
        if(stack.length === 0){ return counter }
        else return counter + 1
    }
}
