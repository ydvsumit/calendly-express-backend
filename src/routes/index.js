const express = require("express");
const router = express.Router();

const eventTypesRoute = require("./eventTypes");
const availabilityRoute = require("./availability");
const scheduleRoute = require("./schedule");

router.use("/event-types", eventTypesRoute);
router.use("/availability", availabilityRoute);
router.use("/schedule", scheduleRoute);

module.exports = router;
