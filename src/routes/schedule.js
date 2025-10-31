const express = require("express");
const router = express.Router();
const { scheduleAppointment } = require("../services/scheduleService");
const durations = require("../utils/duration");
const validateSchema = require("../middleware/validateSchema");
const scheduleSchema = require("../schema/scheduleSchema");

router.post("/", validateSchema(scheduleSchema), (req, res, next) => {
  try {
    const booking = scheduleAppointment(req.body);
    const duration = durations[req.body.appointmentType];
    res.json({
      message: "Appointment booked successfully!",
      booking,
      duration,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
