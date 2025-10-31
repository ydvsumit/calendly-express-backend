const express = require("express");
const router = express.Router();
const { eventTypeService } = require("../services");

// GET /api/event-types
router.get("/", async (req, res, next) => {
  try {
    const data = await eventTypeService.listEventTypes();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
