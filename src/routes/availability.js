const express = require("express");
const router = express.Router();
const { availabilityService } = require("../services");

// GET /api/availability
router.get("/", async (req, res, next) => {
  try {
    const { eventTypeUri, start, end, count } = req.query;
    if (!eventTypeUri)
      return res.status(400).json({ error: "eventTypeUri is required" });

    const data = await availabilityService.getEventTypeAvailableTimes(
      eventTypeUri,
      start,
      end,
      count || 10
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
