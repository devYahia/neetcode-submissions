class MinStack <T>{
    private stack : T[];
    private minArr:T[];
    constructor() {
        this.stack = []
        this.minArr = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: T): void {
        this.stack.push(val)
        if(this.minArr.length === 0 || this.minArr[this.minArr.length -1] >= val ){
            this.minArr.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length === 0) return;
        if(this.minArr[this.minArr.length -1] === this.stack[this.stack.length-1]){
        this.minArr.pop()
        }
        
        this.stack.pop()

    }

    /**
     * @return {number}
     */
    top(): T {
       return this.stack[this.stack.length -1]
    }

    /**
     * @return {number}
     */
    getMin(): T {
        if(this.minArr.length === 0) return
        return this.minArr[this.minArr.length -1]
    }
}
