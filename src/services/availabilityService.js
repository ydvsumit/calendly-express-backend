const { availability } = require("../utils/mockData");

function getAvailableTimes(eventTypeId) {
  return availability.filter(
    (a) => a.eventTypeId === Number(eventTypeId) && !a.booked
  );
}

module.exports = { getAvailableTimes };
