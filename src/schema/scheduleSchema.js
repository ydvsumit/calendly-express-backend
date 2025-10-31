module.exports = {
  type: "object",
  properties: {
    eventTypeId: { type: "number" },
    startTime: { type: "string", format: "date-time" },
    name: { type: "string" },
    email: { type: "string", format: "email" },
    appointmentType: { type: "string" },
  },
  required: ["eventTypeId", "startTime", "name", "email", "appointmentType"],
  additionalProperties: false,
};
