module.exports = class Benchmark {
    constructor(...args) {
        this.functions = [];
        
        for (let func of args) {
            try {
                if (typeof func !== "function") throw new Error("This class only accepts function instances.");
                const start = process.hrtime();
                func();
                const end = process.hrtime(start);
                this.functions.push(end[1] / 1000000);
                
            } catch (e) {
                throw new Error(`Error executing a function, stack: ${e}`);
            }
        }
    }

    get() {
        return this.functions;
    }

}