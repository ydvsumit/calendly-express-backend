const eventTypes = [
  { id: 1, name: "General Consultation", duration: 30 },
  { id: 2, name: "Follow-up", duration: 15 },
  { id: 3, name: "Physical Exam", duration: 45 },
  { id: 4, name: "Specialist Consultation", duration: 60 },
];

let availability = [
  {
    eventTypeId: 1,
    start: "2025-10-30T09:00:00Z",
    end: "2025-10-30T09:30:00Z",
    booked: false,
  },
  {
    eventTypeId: 1,
    start: "2025-10-30T09:30:00Z",
    end: "2025-10-30T10:00:00Z",
    booked: false,
  },
  {
    eventTypeId: 2,
    start: "2025-10-30T10:00:00Z",
    end: "2025-10-30T10:15:00Z",
    booked: false,
  },
  {
    eventTypeId: 3,
    start: "2025-10-30T10:15:00Z",
    end: "2025-10-30T11:00:00Z",
    booked: false,
  },
];

let bookings = [];

module.exports = { eventTypes, availability, bookings };
