const express = require("express");
const router = express.Router();
const { scheduleService } = require("../services");
const durations = require("../utils/duration");
const validateSchema = require("../middleware/validateSchema");
const scheduleSchema = require("../schema/scheduleSchema");

// POST /api/schedule
router.post("/", validateSchema(scheduleSchema), async (req, res, next) => {
  try {
    const { eventTypeUri, startTime, name, email, appointmentType } = req.body;
    const duration = durations[appointmentType];

    const booking = await scheduleService.scheduleAppointment({
      eventTypeUri,
      startTime,
      name,
      email,
      appointmentType,
    });

    res.json({ booking, duration });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
