const client = require("./calendlyClient");
const availabilityService = require("./availabilityService");

async function createInviteeForEvent(schedulingUrl, invitee) {
  const payload = { scheduling_url: schedulingUrl, ...invitee };
  try {
    const res = await client.post("/scheduling_links", payload);
    return res.data;
  } catch (err) {
    if (err.response?.status === 404) {
      const res2 = await client.post("/scheduled_events", { invitee });
      return res2.data;
    }
    throw err;
  }
}

async function scheduleAppointment({
  eventTypeUri,
  startTime,
  name,
  email,
  appointmentType,
}) {
  const avail = await availabilityService.getEventTypeAvailableTimes(
    eventTypeUri,
    startTime,
    startTime
  );
  const slot = (avail?.collection || []).find(
    (s) => s.start_time === startTime
  );

  if (!slot) throw new Error("Requested slot not available");

  const schedulingUrl = slot.scheduling_url || slot.uri;
  const invitee = { name, email };

  const booking = await createInviteeForEvent(schedulingUrl, invitee);
  return booking;
}

module.exports = { createInviteeForEvent, scheduleAppointment };
