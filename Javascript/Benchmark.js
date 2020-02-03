module.exports = class Benchmark {
    constructor(...args) {
        this.functions = [];
        this.n =  50;
        this.m = [];

        for (let func of args) {
            try {
                if (typeof func !== "function") throw new Error("This class only accepts function instances.");
                for (let i = 0; i < this.n; i++) {
                    const start = process.hrtime();
                    func();
                    const end = process.hrtime(start);
                    this.m.push(end[1] / 1000000);
                }
                let value = 0;
                this.m.map(k => value+=k);
                this.m = [];
                this.functions.push(value/this.n);

            } catch (e) {
                throw new Error(`Error executing a function, stack: ${e}`);
            }
        }
    }

    get() {
        return this.functions;
    }

}