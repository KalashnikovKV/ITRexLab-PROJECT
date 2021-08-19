module.exports = class Queue {
    constructor() {
        if (Queue.instance) {
            return Queue.instance
        }
        this.patients = []
        Queue.instance = this
        return Queue.instance
    }

    async add(name) {
        this.patients.push(name)
    }

    get() {
        return this.patients.shift()
    }
}