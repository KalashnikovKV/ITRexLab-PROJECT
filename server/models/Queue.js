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

    async get() {
        if (this.patients.length === 0) {
            const answ = 'очередь пуста'
            return JSON.stringify(answ)
        } else {
            return this.patients.shift()
        }
    }

    async showFirstPatient() {
        if (this.patients.length === 0) {
            const answ = 'очередь пуста'
            return JSON.stringify(answ)
        } else {
            return this.patients[0]
        }
    }
}