const client = require("./calendlyClient");

async function listEventTypes(userUri) {
  const params = {};
  if (userUri) params.user = userUri;
  const res = await client.get("/event_types", { params });
  return res.data;
}

module.exports = { listEventTypes };
