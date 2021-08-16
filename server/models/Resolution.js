let patientsWithResolution = []

module.exports = class Resolution {
    constructor(name, resolution, ttl) {
        this.name = name
        this.resolution = resolution
        this.ttl = ttl
    }

    async add() {
        const now = new Date()
        const expire = JSON.stringify(now.getTime() + (this.ttl * 1000))
        const patient = {
            "name": this.name,
            "resolution": this.resolution,
            "ttl": expire
        }
        patientsWithResolution.push(patient);
        console.log(patientsWithResolution)
    }

    static getPatientWithResolution(name) {
        console.log(patientsWithResolution)
        const itemStr = patientsWithResolution.find(item => item.name == name)

        if (!itemStr) {
            return "patient deleted"
        }

        const now = new Date()
        if (now.getTime() > itemStr.ttl && itemStr.ttl !== undefined) {
            patientsWithResolution = patientsWithResolution.filter(function (item) {
                return item !== itemStr
            })
        }
        return itemStr.resolution

    }
}
