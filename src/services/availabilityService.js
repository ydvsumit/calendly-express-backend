const client = require("./calendlyClient");

async function getEventTypeAvailableTimes(
  eventTypeUri,
  startTime,
  endTime,
  count = 10
) {
  const params = {
    event_type: eventTypeUri,
    start_time: startTime,
    end_time: endTime,
    count,
  };
  const res = await client.get("/event_type_available_times", { params });
  return res.data;
}

module.exports = { getEventTypeAvailableTimes };
