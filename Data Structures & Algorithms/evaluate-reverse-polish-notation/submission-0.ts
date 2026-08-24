class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        if(!tokens) return null;
        let operators = new Set(['+', '-', '*', '/'])
        let operationStack = []

        for(let i = 0; i <tokens.length; i++){
            if(!operators.has(tokens[i])){
                operationStack.push(parseInt(tokens[i]))
            }else {
                    switch(tokens[i]){
                        case ("+") :
                        let num1a = operationStack.pop()
                        let num2a = operationStack.pop()
                        operationStack.push(num1a+num2a)
                        break;

                        case ("*"):
                        let num1b = operationStack.pop()
                        let num2b = operationStack.pop()
                        operationStack.push(num1b*num2b) 
                        break;

                        case("-"):
                        let num1c = operationStack.pop()
                        let num2c = operationStack.pop()
                        operationStack.push(num2c-num1c) 
                        break;

                        case("/"):
                        let num1d = operationStack.pop()
                        let num2d = operationStack.pop()
                        operationStack.push(Math.trunc(num2d/num1d)) 
                        break;
                    }
            }
        }
        return operationStack[operationStack.length-1];
    }
}
