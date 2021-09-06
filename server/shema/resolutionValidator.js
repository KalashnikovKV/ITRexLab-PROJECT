const ajvInstance = require('./ajv-instance')

const schemaResolution = {
    type: "object",
    properties: {
        name: { type: "string" },
        resolution: { type: "string" },
        ttl: { type: "string" }
    },
    required: ["name", "resolution", "ttl"],
    additionalProperties: false,
};

module.exports = ajvInstance.compile(schemaResolution);