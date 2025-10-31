const { bookings, availability } = require("../utils/mockData");

function scheduleAppointment({
  eventTypeId,
  startTime,
  name,
  email,
  appointmentType,
}) {
  const slot = availability.find(
    (a) =>
      a.eventTypeId === Number(eventTypeId) &&
      a.start === startTime &&
      !a.booked
  );

  if (!slot) throw new Error("Slot not available or already booked");

  slot.booked = true;

  const booking = {
    id: bookings.length + 1,
    eventTypeId,
    startTime,
    endTime: slot.end,
    name,
    email,
    appointmentType,
  };

  bookings.push(booking);
  return booking;
}

module.exports = { scheduleAppointment };
