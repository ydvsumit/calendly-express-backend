const express = require("express");
const router = express.Router();
const { listEventTypes } = require("../services/eventTypeService");

router.get("/", (req, res) => {
  res.json(listEventTypes());
});

module.exports = router;
