module.exports = {
  type: "object",
  properties: {
    eventTypeUri: { type: "string" },
    startTime: { type: "string", format: "date-time" },
    name: { type: "string", minLength: 1 },
    email: { type: "string", format: "email" },
    appointmentType: {
      type: "string",
      enum: [
        "general_consultation",
        "follow_up",
        "physical_exam",
        "specialist_consultation",
      ],
    },
  },
  required: ["eventTypeUri", "startTime", "name", "email", "appointmentType"],
  additionalProperties: false,
};
