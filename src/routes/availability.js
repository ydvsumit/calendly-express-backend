const express = require("express");
const router = express.Router();
const { getAvailableTimes } = require("../services/availabilityService");

router.get("/", (req, res) => {
  const { eventTypeId } = req.query;
  if (!eventTypeId)
    return res.status(400).json({ error: "eventTypeId is required" });

  const slots = getAvailableTimes(eventTypeId);
  res.json(slots);
});

module.exports = router;
