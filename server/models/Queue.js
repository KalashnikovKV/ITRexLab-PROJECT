const patients = []
module.exports = class Queue {
    constructor(name) {
        this.name = name
    }

    async add() {
        patients.push(this)
    }

    static get() {
        return patients.shift()
    }

    static showALL() {
        return patients
    }
}