const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErrors: true });
addFormats(ajv); // Enables "date-time", "email", etc.

module.exports = (schema) => {
  const validate = ajv.compile(schema);
  return (req, res, next) => {
    const valid = validate(req.body);
    if (!valid) {
      const errors = validate.errors
        .map((e) => `${e.instancePath || e.keyword} ${e.message}`)
        .join(", ");
      return res.status(400).json({ error: errors });
    }
    next();
  };
};
