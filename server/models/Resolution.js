module.exports = class Resolution {
    constructor() {
        if (Resolution.instance) {
            return Resolution.instance
        }
        this.patientsWithResolution = []
        Resolution.instance = this
        return Resolution.instance
    }

    async add(name, resolution, ttl) {
        const now = new Date()
        const expire = JSON.stringify(now.getTime() + (ttl * 1000))
        const patient = {
            "name": name,
            "resolution": resolution,
            "ttl": expire
        }
        this.patientsWithResolution.push(patient);
        // console.log(this.patientsWithResolution)
    }

    async getPatientWithResolution(name) {
        // console.log(this.patientsWithResolution)
        const itemStr = this.patientsWithResolution.find(item => item.name == name)

        if (!itemStr) {
            return "patient deleted"
        }

        const now = new Date()
        if (now.getTime() > itemStr.ttl && itemStr.ttl !== undefined) {
            this.patientsWithResolution = this.patientsWithResolution.filter(function (item) {
                return item !== itemStr
            })
        }
        return itemStr.resolution

    }

    async deleteResolutionPatient(name) {
        const itemStr = this.patientsWithResolution.find(item => item.name == name)
        if (!itemStr) {
            return "patient deleted"
        } else {
            this.patientsWithResolution = this.patientsWithResolution.filter(function (item) {
                return item !== itemStr
            })
        }
        return itemStr.resolution
    }
}
